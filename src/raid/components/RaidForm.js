import React from 'react'

const RaidForm = ({ handleChange, handleSubmit, raid }) => (
  <form onSubmit={handleSubmit}>
    <label>Raid Boss:</label>
    <input
      name="boss_name"
      placeholder="My Favorite Movie"
      value={raid.boss_name}
      onChange={handleChange}
    />
    <label>Time Remaining:</label>
    <input
      name="time_remaining"
      placeholder="John Doe"
      value={raid.time_remaining}
      onChange={handleChange}
    />
    <button type="submit">SUBMITTTTTTT</button>
  </form>
)

export default RaidForm
