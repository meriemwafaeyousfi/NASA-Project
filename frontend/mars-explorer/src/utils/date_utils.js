export function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
        .format(date)
        .replace(',', '.'); // Add period after the month
}