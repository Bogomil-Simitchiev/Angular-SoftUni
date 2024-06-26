import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

interface Game {
    title: string,
    price: number
}

@Component({
    selector: 'game-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']

})

export class GameComponent {
    name: string = 'Bogi'
    isActive: boolean = true
    shouldPriceBePurple: boolean = false
    items: Game[] = [
        { title: 'Minecraft', price: 14 },
        { title: 'Candy Crush', price: 2 },
        { title: 'Counter-strike', price: 55 }

    ];
    handleClickEvent(): void {
        this.shouldPriceBePurple = !this.shouldPriceBePurple
    }
}