import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function AnimatedButton({
    text,
    onClick,
    className = '',
    type = 'button',
    style = {},
}) {
    return (
        <motion.button
            className={className}
            onClick={onClick}
            type={type}
            initial="initial"
            whileHover="hover"
            style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '0', /* Reset padding since we are setting fixed dimensions */
                border: '2px solid #222',
                borderRadius: '9999px',
                backgroundColor: 'transparent',
                color: '#222',
                overflow: 'hidden',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                ...style
            }}
        >
            {/* Background Fill Animation */}
            <motion.div
                variants={{
                    initial: { scaleY: 0, originY: 1 },
                    hover: { scaleY: 1, originY: 1 }
                }}
                transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#222',
                    zIndex: 0
                }}
            />

            <motion.span
                className="button-content"
                variants={{
                    initial: { color: '#222' },
                    hover: { color: '#ffffff' }
                }}
                transition={{ duration: 0.3 }}
                style={{ position: 'relative', zIndex: 1 }}
            >
                {text}
            </motion.span>

            <motion.div
                className="button-dot"
                style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px'
                }}
            >
                <motion.div
                    className="arrow-svg"
                    variants={{
                        initial: { x: 0, color: '#222' },
                        hover: { x: 4, color: '#ffffff' }
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0022 12.0022H3.0022" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M15.0023 6.0011L21.0023 12.0011L15.0023 18.0011" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </motion.div>
            </motion.div>
        </motion.button>
    );
}

AnimatedButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
};
