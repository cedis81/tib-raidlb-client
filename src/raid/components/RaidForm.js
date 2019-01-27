import React from 'react'
import { withRouter } from 'react-router-dom'

const RaidForm = ({ handleChange, handleSubmit, raid }) => (
  <form onSubmit={handleSubmit}>
    <label>Raid Boss:</label>
    <input
      name="boss_name"
      placeholder="Raid boss name"
      type="text"
      required minLength="2"
      value={raid.boss_name}
      onChange={handleChange}
    />
    <label>Time Remaining:</label>
    <input
      name="time_remaining"
      placeholder="Seconds"
      required type="number"
      min="1"
      max="500"
      value={raid.time_remaining}
      onChange={handleChange}
    />
    <button type="submit">SUBMIT</button>
  </form>
)

export default withRouter(RaidForm)
