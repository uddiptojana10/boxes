export type Occupants = Record<string, string>;

const STORAGE_KEY = "hive-layout";

export function loadLayout(
  fallback: Occupants
): Occupants {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return { ...fallback };
    }

    return JSON.parse(raw);
  } catch {
    return { ...fallback };
  }
}

export function saveLayout(
  occupants: Occupants
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(occupants)
  );
}

export function exportLayout(
  occupants: Occupants
) {
  const blob = new Blob(
    [
      JSON.stringify(
        {
          version: 1,
          exportedAt: new Date().toISOString(),
          occupants,
        },
        null,
        2
      ),
    ],
    {
      type: "application/json",
    }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "hive-layout.json";
  a.click();

  URL.revokeObjectURL(url);
}

export function importLayout(
  file: File
): Promise<Occupants> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const json = JSON.parse(
          reader.result as string
        );

        resolve(json.occupants ?? json);
      } catch {
        reject(new Error("Invalid layout."));
      }
    };

    reader.onerror = reject;

    reader.readAsText(file);
  });
}