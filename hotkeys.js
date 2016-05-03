class Hotkeys {
  constructor() {
    window.setInterval(() => this.findElements(), 2000);
    this.save = "";
    this.oddCommand = false;
  }

  findElements() {
    this.chat = document.querySelector(".textarea-contain textarea");
    this.send = document.querySelector(".send-chat-button");
  }

  command(text, e) {
    if (!this.active) {
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

  castSpell(spell, tower) {
    if (!this.active) {
      var command =
          "!hp" + spell + (tower || "") + (this.oddCommand ? "" : " .");
      this.oddCommand = !this.oddCommand;
      console.log("Attempting command:", command);
      this.command(command);
    }
  }

  get active() { return this.chat == document.activeElement; }

  toggleFocus() {
    if (this.active) {
      this.save = this.chat.value;
      this.chat.value = "";
      this.chat.blur();
    } else {
      if (this.save) {
        this.chat.value = this.save;
        this.save = "";
      }
      this.chat.focus();
    }
  }

  rebind() {
    Mousetrap.reset();
    Mousetrap.bind('esc', () => this.toggleFocus() || this.active);
    Mousetrap.bind('p', () => this.priestMode() || this.active);
    Mousetrap.bind('shift+p', () => this.towerMode() || this.active);
  }

  towerMode() {
    this.rebind();

    Mousetrap.bind('q', () => this.command("!sniper") || this.active);
    Mousetrap.bind('a', () => this.command("!falconeer") || this.active);
    Mousetrap.bind('z', () => this.command("!archer") || this.active);

    Mousetrap.bind('w', () => this.command("!ninja") || this.active);
    Mousetrap.bind('s', () => this.command("!assassin") || this.active);
    Mousetrap.bind('x', () => this.command("!rogue") || this.active);

    Mousetrap.bind('e', () => this.command("!bombermage") || this.active);
    Mousetrap.bind('d', () => this.command("!pyromancer") || this.active);
    Mousetrap.bind('c', () => this.command("!firemage") || this.active);

    Mousetrap.bind('r', () => this.command("!stormmage") || this.active);
    Mousetrap.bind('f', () => this.command("!trickster") || this.active);
    Mousetrap.bind('v', () => this.command("!frostmage") || this.active);

    Mousetrap.bind('t', () => this.command("!necromancer") || this.active);
    Mousetrap.bind('g', () => this.command("!deathdealer") || this.active);
    Mousetrap.bind('b', () => this.command("!alchemist") || this.active);

    Mousetrap.bind('n', () => this.command("!bard") || this.active);
    Mousetrap.bind('h', () => this.command("!mimic") || this.active);
    Mousetrap.bind('y', () => this.command("!scout") || this.active);

    Mousetrap.bind('0', () => this.command("!train") || this.active);
    Mousetrap.bind('1', () => this.command("!1") || this.active);
    Mousetrap.bind('2', () => this.command("!2") || this.active);
    Mousetrap.bind('3', () => this.command("!3") || this.active);
    Mousetrap.bind('4', () => this.command("!4") || this.active);
    Mousetrap.bind('5', () => this.command("!5") || this.active);
    Mousetrap.bind('6', () => this.command("!6") || this.active);
    Mousetrap.bind('7', () => this.command("!7") || this.active);
    Mousetrap.bind('8', () => this.command("!8") || this.active);
    Mousetrap.bind('9', () => this.command("!9") || this.active);
    Mousetrap.bind('/', () => this.command("!10") || this.active);
    Mousetrap.bind('*', () => this.command("!11") || this.active);
    Mousetrap.bind('-', () => this.command("!12") || this.active);

    Mousetrap.bind('+', () => this.command("!p") || this.active);
    Mousetrap.bind('.', () => this.command("!pd") || this.active);
  }

  priestMode() {
    this.command("!highpriest");
    this.rebind();

    Mousetrap.bind('1', () => this.tower = 1 || this.active);
    Mousetrap.bind('2', () => this.tower = 2 || this.active);
    Mousetrap.bind('3', () => this.tower = 3 || this.active);
    Mousetrap.bind('4', () => this.tower = 4 || this.active);
    Mousetrap.bind('5', () => this.tower = 5 || this.active);
    Mousetrap.bind('6', () => this.tower = 6 || this.active);
    Mousetrap.bind('7', () => this.tower = 7 || this.active);
    Mousetrap.bind('8', () => this.tower = 8 || this.active);
    Mousetrap.bind('9', () => this.tower = 9 || this.active);
    Mousetrap.bind('/', () => this.tower = 10 || this.active);
    Mousetrap.bind('*', () => this.tower = 11 || this.active);
    Mousetrap.bind('-', () => this.tower = 12 || this.active);

    Mousetrap.bind('s', () => this.castSpell("str", this.tower) || this.active);
    Mousetrap.bind('f', () => this.castSpell("fcs", this.tower) || this.active);
    Mousetrap.bind('q', () => this.castSpell("pwr", this.tower) || this.active);
    Mousetrap.bind('shift+w', () => this.castSpell("wis") || this.active);
    Mousetrap.bind('z', () => this.castSpell("frz") || this.active);
    Mousetrap.bind('t', () => this.castSpell("hst") || this.active);
    Mousetrap.bind('`', () => this.castSpell("shd") || this.active);
  }
}

var h = new Hotkeys();
h.towerMode();
