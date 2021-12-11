import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = function(event) {
        console.log('click');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

// CSS in JS
/*const headerStyle = {
    color: 'red'
}*/

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
