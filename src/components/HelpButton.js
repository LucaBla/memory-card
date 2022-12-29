function HelpButton(props) {
  return (
    <div className="help-btn">
      <button onClick={() => props.setIsModalOpen(true)}>?</button>
    </div>
  );
}

export default HelpButton;