export const formatDate = (unformattedDate: string) => {
  const date = new Date(unformattedDate);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};
