import React from "react";
import Tile from "./Tile"

const width = 10;
const height = 10;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: [],
        };
    }

    renderTile(r,c, color) {
        this.state.tiles.push({row: r, col: c, color: color});
        return (
            <Tile />
        )
    }

    renderBoard() {
        let board = [];
        for(let h = 0; h < height; h++) {
            let children = []
            for(let w = 0; w < width; w++) {
                children.push(this.renderTile(w,h, "white"))
            }
            board.push(<div className="board-row">{children}</div>);
        }
        return board;
    }

    render() {
        return (
            <div className="board">
                {this.renderBoard()}
            </div>
        );
    }
  }
  
  export default Board;
  