import { Comment } from "../Comment/Comment";
import Styles from "./Post.module.css";

export const Post = () => {
  return(
    <article className={Styles.post}>
      <header>
        <div className={Styles.author}>
          <img src="https://avatars.githubusercontent.com/u/89947057?v=4" />

          <div className={Styles.authorInfo}>
            <strong>Kevin Alves Da Silva</strong>
            <span>Dev Front-End</span>
          </div>
        </div>

        <time title="11 de maio de 2021 às 08:13" dateTime="2022-05-11 08:00:00">Publicado há 1h</time> 
      </header>

      <div className={Styles.content}>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p>
            <a href="">jane.design/doctorcare</a>
          </p>

          <p>
            <a href="">#novoprojeto</a>{" "}
            <a href="">#nlw </a>{" "}
            <a href="">#rocketseat</a>
          </p>
      </div>

      <form className={Styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={Styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};