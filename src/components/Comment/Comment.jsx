import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "../Avatar/Avatar";

import Style from "./Comment.module.css";

export const Comment = () => {
  return(
    <div className={Style.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/89947057?v=4" />

      <div className={Style.commentBox}>
        <div className={Style.commentContent}>
          <header>
            <div className={Style.authorAndTime}>
              <strong>Kevin Alves Da Silva</strong>
              <time title="11 de maio de 2021 às 08:13" dateTime="2022-05-11 08:00:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>
            Muito bom Devon, parabéns
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};