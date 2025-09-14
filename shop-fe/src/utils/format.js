// format.js
import dayjs from "dayjs";

// Format ngày
export function formatDate(date) {
  return dayjs(date).format("DD/MM/YYYY");
}

// Format tiền tệ
export function formatCurrency(amount, locale = "vi-VN", currency = "VND") {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
}
