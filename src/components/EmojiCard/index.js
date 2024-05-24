import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li>
      <button className="emoji-button" type="button" onClick={onClickEmojiCard}>
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
