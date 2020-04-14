import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Bulma</strong> by{' '}
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
          licensed{' '}
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
    </footer>
  )
}

export default Footer
