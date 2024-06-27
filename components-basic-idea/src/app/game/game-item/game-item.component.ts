import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

export interface Game {
    title: string,
    price: number
}

@Component({
    selector: 'game-item-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './game-item.component.html',
    styleUrls: ['./game-item.component.css']

})

export class GameItemComponent {
    @Input() item: Game;
    @Input() shouldPriceBePurple: boolean;


}