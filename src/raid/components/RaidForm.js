import React from 'react'
import { withRouter } from 'react-router-dom'

const RaidForm = ({ handleChange, handleSubmit, raid }) => (
  <form onSubmit={handleSubmit}>
    <label>Raid Boss:</label>
    <input
      name="boss_name"
      placeholder="Raid boss name"
      value={raid.boss_name}
      onChange={handleChange}
    />
    <label>Time Remaining:</label>
    <input
      name="time_remaining"
      placeholder="Time in seconds"
      value={raid.time_remaining}
      onChange={handleChange}
    />
    <button type="submit">SUBMITTTTTTT</button>
  </form>
)

export default withRouter(RaidForm)
