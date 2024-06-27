import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Game, GameItemComponent } from "./game-item/game-item.component";

@Component({
    selector: 'game-component',
    standalone: true,
    imports: [CommonModule, FormsModule, GameItemComponent],
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']

})

export class GameComponent {
    name: string = 'Bogi'
    isActive: boolean = true
    text: string = 'some text'
    shouldPriceBePurple: boolean = false
    items: Game[] = [
        { title: 'Minecraft', price: 14 },
        { title: 'Candy Crush', price: 2 },
        { title: 'Counter-strike', price: 55 }

    ];
    handleClickEvent(): void {
        this.shouldPriceBePurple = !this.shouldPriceBePurple
    }
    handleShowElements(gameContainer: HTMLElement) {
        console.log(gameContainer.children);

    }
    handleShowUsername(username: HTMLInputElement){
        console.log(username.value);
        
    }
}