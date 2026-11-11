/* Gemensamt färgtema för skolans widgets.
   Alla färgkoder för måndag–fredag är angivna enligt skolans färgschema. */
(() => {
  const themes = {
    monday:    { background: "#5B7E3C", text: "#E8F5BD", primary: "#A2CB8B" },
    tuesday:   { background: "#274C77", text: "#A3CEF1", primary: "#A3CEF1" },
    wednesday: { background: "#F9F8F6", text: "#C9B59C", primary: "#D9CFC7" },
    thursday:  { background: "#8A5F41", text: "#F3E4C9", primary: "#A77F60" },
    friday:    { background: "#FFCB56", text: "#FF933E", primary: "#FFE9A9" }
  };

  function applyDayTheme() {
    const weekday = new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Stockholm",
      weekday: "long"
    }).format(new Date()).toLowerCase();

    // Helgerna behåller widgetarnas befintliga blå grundtema.
    const theme = themes[weekday] || themes.tuesday;
    const root = document.documentElement;
    root.style.setProperty("--day-background", theme.background);
    root.style.setProperty("--day-text", theme.text);
    root.style.setProperty("--day-primary", theme.primary);
  }

  applyDayTheme();
  // Kontrollera regelbundet så att temat byts automatiskt efter midnatt.
  setInterval(applyDayTheme, 60 * 1000);
})();
