class Hotkeys {
  constructor() {
    setInterval(() => this.findElements(), 2000);
    this.save = "";
  }
  
  findElements() {
    this.chat = document.querySelector(".textarea-contain textarea");
    this.send = document.querySelector(".send-chat-button");
  }
  
  command(text, e) {
    if (this.chat != document.activeElement) {
      if (e) {
        e.preventDefault();
      }
      this.chat.value = text;
      this.chat.focus();
      this.send.click();
      this.chat.blur();

      this.chat.focus();
      this.send.click();
      this.chat.blur();
    }
  }

  toggleFocus() {
    if (this.chat == document.activeElement) {
      this.save = this.chat.value;
      this.chat.value = "";
      this.chat.blur();
    } else {
      if (this.save) {
	this.chat.value = save;
	this.save = "";
      }
      this.chat.focus();
    }
  }
}
var h = new Hotkeys();

Mousetrap.bind('esc', () => h.toggleFocus());
Mousetrap.bind('q', (e) => h.command("!sniper", e));
Mousetrap.bind('a', (e) => h.command("!falconeer", e));
Mousetrap.bind('z', (e) => h.command("!archer", e));

Mousetrap.bind('w', (e) => h.command("!ninja", e));
Mousetrap.bind('s', (e) => h.command("!assassin", e));
Mousetrap.bind('x', (e) => h.command("!rogue", e));

Mousetrap.bind('e', (e) => h.command("!bombermage", e));
Mousetrap.bind('d', (e) => h.command("!pyromancer", e));
Mousetrap.bind('c', (e) => h.command("!firemage", e));

Mousetrap.bind('r', (e) => h.command("!stormmage", e));
Mousetrap.bind('f', (e) => h.command("!trickster", e));
Mousetrap.bind('v', (e) => h.command("!frostmage", e));

Mousetrap.bind('t', (e) => h.command("!necromancer", e));
Mousetrap.bind('g', (e) => h.command("!deathdealer", e));
Mousetrap.bind('b', (e) => h.command("!alchemist", e));

Mousetrap.bind('n', (e) => h.command("!bard", e));
Mousetrap.bind('h', (e) => h.command("!mimic", e));
Mousetrap.bind('y', (e) => h.command("!scout", e));

Mousetrap.bind('0', (e) => h.command("!train", e));
Mousetrap.bind('1', (e) => h.command("!1", e));
Mousetrap.bind('2', (e) => h.command("!2", e));
Mousetrap.bind('3', (e) => h.command("!3", e));
Mousetrap.bind('4', (e) => h.command("!4", e));
Mousetrap.bind('5', (e) => h.command("!5", e));
Mousetrap.bind('6', (e) => h.command("!6", e));
Mousetrap.bind('7', (e) => h.command("!7", e));
Mousetrap.bind('8', (e) => h.command("!8", e));
Mousetrap.bind('9', (e) => h.command("!9", e));
Mousetrap.bind('/', (e) => h.command("!10", e));
Mousetrap.bind('*', (e) => h.command("!11", e));
Mousetrap.bind('-', (e) => h.command("!12", e));

Mousetrap.bind('+', (e) => h.command("!p", e));
Mousetrap.bind('.', (e) => h.command("!pd", e));
