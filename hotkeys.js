class Hotkeys {
  constructor() {
    window.setInterval(() => this.findElements(), 2000);
    this.save = "";
    this.oddCommand = false;
  }

  findElements() {
    this.chat = document.querySelector(".textarea-contain textarea");
    this.send = document.querySelector(".chat-interface button.primary");
  }

  command(text) {
    if (!this.active) {
      if (this.oddCommand) {
        text += " ﻿";
      }
      this.oddCommand = !this.oddCommand;
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
      var command = "!hp" + spell + (tower || "");
      console.log("Attempting command:", command);
      this.command(command);
    }
  }

  get active() {
    return document.activeElement.className.indexOf("chat_text_input") != -1;
  }

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
    Mousetrap.bind('esc', () => this.toggleFocus(), false);
    Mousetrap.bind('p', () => this.priestMode(), this.active);
    Mousetrap.bind('shift+p', () => this.towerMode(), this.active);
  }

  towerMode() {
    if (this.active) {
      return;
    }
    this.rebind();

    Mousetrap.bind('Q', () => this.command("!sniper"), this.active);
    Mousetrap.bind('A', () => this.command("!falconeer"), this.active);
    Mousetrap.bind('Z', () => this.command("!archer"), this.active);

    Mousetrap.bind('W', () => this.command("!ninja"), this.active);
    Mousetrap.bind('S', () => this.command("!assassin"), this.active);
    Mousetrap.bind('X', () => this.command("!rogue"), this.active);

    Mousetrap.bind('E', () => this.command("!lightningmage"), this.active);
    Mousetrap.bind('E', () => this.command("!bombermage"), this.active);
    Mousetrap.bind('D', () => this.command("!pyromancer"), this.active);
    Mousetrap.bind('C', () => this.command("!firemage"), this.active);

    Mousetrap.bind('R', () => this.command("!stormmage"), this.active);
    Mousetrap.bind('F', () => this.command("!trickster"), this.active);
    Mousetrap.bind('V', () => this.command("!frostmage"), this.active);

    Mousetrap.bind('T', () => this.command("!necromancer"), this.active);
    Mousetrap.bind('G', () => this.command("!deathdealer"), this.active);
    Mousetrap.bind('B', () => this.command("!alchemist"), this.active);

    Mousetrap.bind('Y', () => this.command("!scout"), this.active);
    Mousetrap.bind('H', () => this.command("!mimic"), this.active);
    Mousetrap.bind('N', () => this.command("!bard"), this.active);

    Mousetrap.bind('0', () => this.command("!train"), this.active);
    Mousetrap.bind('1', () => this.command("!1"), this.active);
    Mousetrap.bind('2', () => this.command("!2"), this.active);
    Mousetrap.bind('3', () => this.command("!3"), this.active);
    Mousetrap.bind('4', () => this.command("!4"), this.active);
    Mousetrap.bind('5', () => this.command("!5"), this.active);
    Mousetrap.bind('6', () => this.command("!6"), this.active);
    Mousetrap.bind('7', () => this.command("!7"), this.active);
    Mousetrap.bind('8', () => this.command("!8"), this.active);
    Mousetrap.bind('9', () => this.command("!9"), this.active);
    Mousetrap.bind('tab', () => this.command("!10"), this.active);
    Mousetrap.bind('numlock', () => this.command("!10"), this.active);
    Mousetrap.bind('/', () => this.command("!11"), this.active);
    Mousetrap.bind('*', () => this.command("!12"), this.active);

    Mousetrap.bind('+', () => this.command("!p"), this.active);
    Mousetrap.bind('-', () => this.command("!pd"), this.active);
  }

  priestMode() {
    if (this.active) {
      return;
    }
    this.command("!highpriest");
    this.rebind();

    Mousetrap.bind('1', () => this.tower = 1, this.active);
    Mousetrap.bind('2', () => this.tower = 2, this.active);
    Mousetrap.bind('3', () => this.tower = 3, this.active);
    Mousetrap.bind('4', () => this.tower = 4, this.active);
    Mousetrap.bind('5', () => this.tower = 5, this.active);
    Mousetrap.bind('6', () => this.tower = 6, this.active);
    Mousetrap.bind('7', () => this.tower = 7, this.active);
    Mousetrap.bind('8', () => this.tower = 8, this.active);
    Mousetrap.bind('9', () => this.tower = 9, this.active);
    Mousetrap.bind('tab', () => this.tower = 10, this.active);
    Mousetrap.bind('numlock', () => this.tower = 10, this.active);
    Mousetrap.bind('/', () => this.tower = 11, this.active);
    Mousetrap.bind('*', () => this.tower = 12, this.active);

    Mousetrap.bind('s', () => this.castSpell("str", this.tower), this.active);
    Mousetrap.bind('f', () => this.castSpell("fcs", this.tower), this.active);
    Mousetrap.bind('q', () => this.castSpell("pwr", this.tower), this.active);
    Mousetrap.bind('W', () => this.castSpell("wis"), this.active);
    Mousetrap.bind('z', () => this.castSpell("frz"), this.active);
    Mousetrap.bind('t', () => this.castSpell("hst"), this.active);
    Mousetrap.bind('`', () => this.castSpell("shd"), this.active);
  }
}

var h = new Hotkeys();
h.towerMode();
