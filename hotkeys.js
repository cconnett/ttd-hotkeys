class Hotkeys {
  constructor() {
    setInterval(() => this.findElements(), 2000);
    this.save = "";
    this.oddCommand = false;
  }
  
  findElements() {
    this.chat = document.querySelector(".textarea-contain textarea");
    this.send = document.querySelector(".send-chat-button");
  }
   
  preventingDefault(fn) {
    return function(e) {
      if (!this.active) {
	e.preventDefault();
      }
      fn();
    }.bind(this);
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
      var command = "!hp" + spell + (tower || "") + (this.oddCommand ? "" : " .");
      this.oddCommand = !this.oddCommand;
      console.log("Attempting command:", command);
      this.command(command);
    }
  }

  get active() {
    return this.chat == document.activeElement;
  }
  
  toggleFocus() {
    if (this.active) {
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

  rebind() {
    Mousetrap.reset();
    Mousetrap.bind('esc', () => this.toggleFocus());
    Mousetrap.bind('p', this.preventingDefault(() => this.priestMode()));
    Mousetrap.bind('shift+p', this.preventingDefault(() => this.towerMode()));
  }

  towerMode() {
    this.rebind();

    Mousetrap.bind('q', this.preventingDefault(() => this.command("!sniper")));
    Mousetrap.bind('a', this.preventingDefault(() => this.command("!falconeer")));
    Mousetrap.bind('z', this.preventingDefault(() => this.command("!archer")));
    
    Mousetrap.bind('w', this.preventingDefault(() => this.command("!ninja")));
    Mousetrap.bind('s', this.preventingDefault(() => this.command("!assassin")));
    Mousetrap.bind('x', this.preventingDefault(() => this.command("!rogue")));
    
    Mousetrap.bind('e', this.preventingDefault(() => this.command("!bombermage")));
    Mousetrap.bind('d', this.preventingDefault(() => this.command("!pyromancer")));
    Mousetrap.bind('c', this.preventingDefault(() => this.command("!firemage")));
    
    Mousetrap.bind('r', this.preventingDefault(() => this.command("!stormmage")));
    Mousetrap.bind('f', this.preventingDefault(() => this.command("!trickster")));
    Mousetrap.bind('v', this.preventingDefault(() => this.command("!frostmage")));
    
    Mousetrap.bind('t', this.preventingDefault(() => this.command("!necromancer")));
    Mousetrap.bind('g', this.preventingDefault(() => this.command("!deathdealer")));
    Mousetrap.bind('b', this.preventingDefault(() => this.command("!alchemist")));
    
    Mousetrap.bind('n', this.preventingDefault(() => this.command("!bard")));
    Mousetrap.bind('h', this.preventingDefault(() => this.command("!mimic")));
    Mousetrap.bind('y', this.preventingDefault(() => this.command("!scout")));
    
    Mousetrap.bind('0', this.preventingDefault(() => this.command("!train")));
    Mousetrap.bind('1', this.preventingDefault(() => this.command("!1")));
    Mousetrap.bind('2', this.preventingDefault(() => this.command("!2")));
    Mousetrap.bind('3', this.preventingDefault(() => this.command("!3")));
    Mousetrap.bind('4', this.preventingDefault(() => this.command("!4")));
    Mousetrap.bind('5', this.preventingDefault(() => this.command("!5")));
    Mousetrap.bind('6', this.preventingDefault(() => this.command("!6")));
    Mousetrap.bind('7', this.preventingDefault(() => this.command("!7")));
    Mousetrap.bind('8', this.preventingDefault(() => this.command("!8")));
    Mousetrap.bind('9', this.preventingDefault(() => this.command("!9")));
    Mousetrap.bind('/', this.preventingDefault(() => this.command("!10")));
    Mousetrap.bind('*', this.preventingDefault(() => this.command("!11")));
    Mousetrap.bind('-', this.preventingDefault(() => this.command("!12")));

    Mousetrap.bind('+', this.preventingDefault(() => this.command("!p")));
    Mousetrap.bind('.', this.preventingDefault(() => this.command("!pd")));
  }

  priestMode() {
    this.command("!highpriest");
    this.rebind();
    
    Mousetrap.bind('1', this.preventingDefault(() => this.tower = 1));
    Mousetrap.bind('2', this.preventingDefault(() => this.tower = 2));
    Mousetrap.bind('3', this.preventingDefault(() => this.tower = 3));
    Mousetrap.bind('4', this.preventingDefault(() => this.tower = 4));
    Mousetrap.bind('5', this.preventingDefault(() => this.tower = 5));
    Mousetrap.bind('6', this.preventingDefault(() => this.tower = 6));
    Mousetrap.bind('7', this.preventingDefault(() => this.tower = 7));
    Mousetrap.bind('8', this.preventingDefault(() => this.tower = 8));
    Mousetrap.bind('9', this.preventingDefault(() => this.tower = 9));
    Mousetrap.bind('/', this.preventingDefault(() => this.tower = 10));
    Mousetrap.bind('*', this.preventingDefault(() => this.tower = 11));
    Mousetrap.bind('-', this.preventingDefault(() => this.tower = 12));

    Mousetrap.bind('s', this.preventingDefault(() => this.castSpell("str", this.tower)));
    Mousetrap.bind('f', this.preventingDefault(() => this.castSpell("fcs", this.tower)));
    Mousetrap.bind('q', this.preventingDefault(() => this.castSpell("pwr", this.tower)));
    Mousetrap.bind('shift+w', this.preventingDefault(() => this.castSpell("wis")));
    Mousetrap.bind('z', this.preventingDefault(() => this.castSpell("frz")));
    Mousetrap.bind('t', this.preventingDefault(() => this.castSpell("hst")));
    Mousetrap.bind('`', this.preventingDefault(() => this.castSpell("shd")));
  }
}

var h = new Hotkeys();
h.towerMode();
