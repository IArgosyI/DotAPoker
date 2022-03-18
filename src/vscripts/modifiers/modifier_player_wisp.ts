import { BaseModifier, registerModifier } from "../lib/dota_ts_adapter";


@registerModifier()
export class modifier_player_wisp extends BaseModifier {
    IsHidden() {
        return false;
    }
    IsDebuff() {
        return false;
    }

    // Set state
    CheckState(): Partial<Record<modifierstate, boolean>> {
        return {
            [ModifierState.INVULNERABLE]: true,
            [ModifierState.FLYING]: true,
            [ModifierState.FORCED_FLYING_VISION]: true,
        };
    }

    // Override speed given by Modifier_Speed
    GetModifierMoveSpeed_Absolute(): number {
        return 540;
    }

    // Run when modifier instance is created
    OnCreated(): void {
    }
}
