export function CalendarEmbed() {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-50 blur-xl"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=536e838898ffa634b8b9c1ff5e9150a918019cc963a6b75eab7b3f7c65a612c9%40group.calendar.google.com&ctz=America%2FChicago"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="Austin Zouk Calendar"
          className="bg-white"
        />
      </div>
    </div>
  )
}
