import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";

import Styles from "./Post.module.css";
import { useState } from "react";

export const Post = ({ author, publishedAt, content}) => {
  const [comments, setComments] = useState(["Que post bacana hein 🚀"]);
  const [newCommitText, setNewCommitText] = useState("");

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativaToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const handleCreateNewCommit = () => {
    event.preventDefault();

    setComments([...comments, newCommitText]);
    setNewCommitText("");
  };

  const handleNewCommitChange = () => {
    setNewCommitText(event.target.value);
  };

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
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={line.content}><a href="/">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewCommit} className={Styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário"
          onChange={handleNewCommitChange}
          value={newCommitText}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={Styles.commentList}>
        {comments.map(comment => (
          <Comment key={comment} content={comment} />
        ))}
      </div>
    </article>
  );
};