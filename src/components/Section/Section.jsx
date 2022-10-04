import PropTypes from 'prop-types';
import styles from './Section.module.css'

export const Section = ({ children, title }) => {
  return (
    <section className={title? styles.sectionBg : styles.baseSection}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};