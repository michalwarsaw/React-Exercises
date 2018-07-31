import React from 'react';

const shop = {
    title: "Kabaczek",
    imageUrl: "http://ogrodnikleszek.pl/sites/default/files/cukinia.jpg",
    price: "2 zł",
    description: "Zielony kabaczek"

}
const menu = [
    {
        title   :   'Mysz komputerowa',
        image   :   'https://f00.esfr.pl/foto/5/1283895170/14a6d6864a9194a1889ba5cb3ca046ed/logitech-m185,1283895170_7.jpg'
    },
    {
        title   :   'Klawiatura',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
    },
    {
        title   :   'Laptop programisty',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
    }
];
class ShopItemHeader extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <img src = {this.props.imageUrl}/>
            </div>
        )
    }
}
class ShopItemDescription extends React.Component {
    render() {
        return (
            <article>
                <p>{this.props.description}</p>
            </article>
        )
    }
}
class ShopItemPrice extends React.Component {
    render() {
        return (
            <div>
                Cena: {this.props.price}
                <button>Kup!</button>
            </div>
        )
    }
}
class ShopList extends React.Component {
    render() {
        return (
            <div className = "shoplist">
                { this.props.list.map(el => <ShopItemHeader title = {el.title} imageUrl = {el.image} />) }
            </div>
        )
    }
}
class ShopItem extends React.Component {
    render() {
        return (
                <div>
                <ShopItemHeader title = {this.props.shop.title} imageUrl = {this.props.shop.imageUrl} />
                <ShopItemDescription description = {this.props.shop.description} />
                <ShopItemPrice price = {this.props.shop.price} />
                <ShopList list={menu} />
                </div>
                )
    }
}

export default class App extends React.Component {
    render() {
        return (
                <ShopItem shop={shop} />
        )
    }
}