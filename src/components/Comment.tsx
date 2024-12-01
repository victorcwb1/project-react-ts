import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/51939122?v=4" alt=''/>
              
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Victor Assunção</strong>
                            <time title="11 de Novembro às 18:22h" dateTime="2024-07-11 18:22:44">Cerca de 1h Atrás</time>
                        </div>
                        
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                        
                    <p>{content}</p>
                </div>
                
                <footer>
                    <button onClick={handleLikeComment}>
                      <ThumbsUp />  
                    Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
} 