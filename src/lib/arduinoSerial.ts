type TagListener = (uid: string) => void;

let port: any = null;
let reader: ReadableStreamDefaultReader<string> | null = null;
let writer: WritableStreamDefaultWriter<Uint8Array> | null = null;
let connected = false;
let listeners: TagListener[] = [];

export function isArduinoConnected() {
  return connected;
}

export function onArduinoTag(listener: TagListener) {
  listeners.push(listener);

  return () => {
    listeners = listeners.filter((item) => item !== listener);
  };
}

export async function sendArduinoCommand(command: string) {
  if (!writer) return;

  const encoder = new TextEncoder();
  await writer.write(encoder.encode(`${command}\n`));
}

export async function connectArduino() {
  if (connected) return;

  port = await (navigator as any).serial.requestPort();
  await port.open({ baudRate: 9600 });

  connected = true;

  writer = port.writable.getWriter();

  const decoder = new TextDecoderStream();
  port.readable.pipeTo(decoder.writable);

  reader = decoder.readable.getReader();

  let buffer = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    if (!value) continue;

    buffer += value;

    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    for (const line of lines) {
      const cleanLine = line.trim();
      console.log("SERIAL:", cleanLine);

      if (cleanLine.startsWith("TAG:")) {
        const uid = cleanLine.replace("TAG:", "").trim();
        listeners.forEach((listener) => listener(uid));
      }
    }
  }
}