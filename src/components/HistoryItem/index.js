const HistoryItem = props => {
  const {historyDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl} = historyDetails
  return (
    <div>
      <li>
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain-logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          data-testid="delete"
        />
      </li>
    </div>
  )
}
export default HistoryItem
