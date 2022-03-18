class ExampleUI {
    // Instance variables
    panel: Panel;
    playerPanels: Partial<Record<PlayerID, PlayerPortrait>> = {}; // A map with number keys and PlayerPortrait values

    // ExampleUI constructor
    constructor(panel: Panel) {
        this.panel = panel;
        $.Msg(panel); // Print the panels

        // Find container element
        const container = this.panel.FindChild("HeroPortraits")!;
        container.RemoveAndDeleteChildren();

        // Create portrait for player 0, 1 and 2
        this.playerPanels[0] = new PlayerPortrait(container, "npc_dota_hero_juggernaut", "Player0");
        this.playerPanels[1] =  new PlayerPortrait(container, "npc_dota_hero_omniknight", "Player1");
        this.playerPanels[2] =  new PlayerPortrait(container, "npc_dota_hero_invoker", "Player2");

        // Listen for health changed event, when it fires, handle it with this.OnHPChanged
        GameEvents.Subscribe<HPChangedEventData>("hp_changed", (event) => this.OnHPChanged(event));
    }

    // Event handler for HP Changed event
    OnHPChanged(event: HPChangedEventData) {
        // Get portrait for this player
        const playerPortrait = this.playerPanels[event.playerID];

        // Set HP on the player panel
        playerPortrait?.SetHealthPercent(event.hpPercentage);
    }
}

let ui = new ExampleUI($.GetContextPanel());