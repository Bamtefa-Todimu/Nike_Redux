import '../styles/filter.css'


const Filter = () => {
  return (
    <div className='filter-container'>
      <div className="filter-wrapper">
        <ul className="cat-section">
          <li>Lifestyle</li>
          <li>Jordan</li>
          <li>Running</li>
          <li className='active-list'>Basketball</li>
          <li>Football</li>
          <li>Soccer</li>
          <li>Training &amp; Gym</li>
          <li>Skateboarding</li>
          <li>Baseball</li>
          <li>Golf</li>
          <li>Tennis</li>
          <li>Walking</li>
          <li>Track &amp; Field</li>
          <li>Volleyball</li>
          <li>Sandals &amp; Slides</li>
          <li>Shoes $100 &amp; Under</li>
        </ul>

        <p className="cat-title">Athletes</p>

        <ul className="athletes-section">
            <li>LeBron James</li>
            <li>Kyrie Irving</li>
            <li>Kevin Durant</li>
            <li>Giannis Antetokounmpo</li>
            <li>Paul George</li>
            <li>Russell Westbrook</li>
            <li>Zion Williamson</li>
        </ul>

        <p className="cat-title">Shop by Price</p>


        <ul className="price-section">
            <li>$0 - $25</li>
            <li>$25 - $50</li>
            <li>$50 - $100</li>
            <li>$100 - $150</li>
            <li>Over $150</li>
            
        </ul>
      </div>
    </div>
  )
}

export default Filter