import React from 'react'

const FilterIcon = () => {
  return (
    <div style={{ width: '40px', height: '40px', borderRadius: '4px', border: '2px solid rgba(17, 17, 17, 0.2)',  display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="#111111" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default FilterIcon
