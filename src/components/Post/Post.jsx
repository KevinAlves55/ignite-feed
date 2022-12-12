import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";

import Styles from "./Post.module.css";

export const Post = ({ author, publishedAt, content }) => {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativaToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return(
    <article className={Styles.post}>
      <header>
        <div className={Styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={Styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt}>
          {publishedDateRelativaToNow}
        </time> 
      </header>

      <div className={Styles.content}>
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>
          } else if (line.type === "link") {
            return <p><a href="/">{line.content}</a></p>
          }
        })}
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