export const containerWidths = {
  13: "1000px",
  12: "950px",
  11: "900px",
  10: "800px",
  9: "750px",
  8: "650px",
  7: "650px",
  6: "550px",
  5: "550px",
  4: "550px",
  3: "550px",
};

export const compartmentSizes: { [key: number]: [number, number] } = {
  13: [5, 8],
  12: [5, 7],
  11: [4, 7],
  10: [4, 6],
  9: [3, 6],
  8: [3, 5],
  7: [2, 5],
  6: [2, 4],
  5: [1, 4],
  4: [0, 4],
  3: [0, 3],
};

export const getCompartmentSizes = (memberCount: number): [number, number] =>
  compartmentSizes[memberCount as keyof typeof compartmentSizes] || [
    0,
    memberCount,
  ];

export const getContainerWidth = (memberCount: number): string =>
  containerWidths[memberCount as keyof typeof containerWidths] || "550px";

export const imageExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url);
    return response.ok && (await response.blob()).size > 0;
  } catch {
    return false;
  }
};
