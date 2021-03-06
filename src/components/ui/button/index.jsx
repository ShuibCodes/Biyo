/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { StyledButton, StyledAnchor, StyledLink, createStyles } from "./style";

const Button = ({
    children,
    type,
    color,
    size,
    shape,
    variant,
    width,
    sx,
    className,
    path,
    label,
    ...props
}) => {
    const buttonProps = {
        css: (theme) => createStyles(theme, color, size, shape, variant, width),
    };
    if (path) {
        const internal = /^\/(?!\/)/.test(path);
        const isHash = path.startsWith("#");

        if (internal) {
            return (
                <StyledButton
                    className={className}
                    to={path}
                    {...buttonProps}
                    sx={sx}
                >
                    {label && <span className="sr-only">{label}</span>}
                    <span>{children}</span>
                </StyledButton>
            );
        }
        if (isHash) {
            return (
                <StyledButton
                    className={className}
                    href={path}
                    {...buttonProps}
                    sx={sx}
                >
                    {label && <span className="sr-only">{label}</span>}
                    <span>{children}</span>
                </StyledButton>
            );
        }
        return (
            <StyledButton
                href={path}
                {...buttonProps}
                sx={sx}
                target="_blank"
                rel="noopener"
                className={className}
            >
                {label && <span className="sr-only">{label}</span>}
                <span>{children}</span>
            </StyledButton>
        );
    }

    return (
        <StyledButton
            className={className}
            type={type}
            {...buttonProps}
            sx={sx}
        >
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.object,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "dark",
        "light",
        "gradient",
        "theme-gradient",
        "outlined-transparent",
        "border-gradient",
        "border-normal",
    ]),
    size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "fullwidth"]),
    shape: PropTypes.oneOf(["rounded"]),
    width: PropTypes.oneOf(["long"]),
    variant: PropTypes.oneOf(["outlined", "iconButton"]),
    path: PropTypes.string,
    label: PropTypes.string,
};

Button.defaultProps = {
    type: "button",
    size: "medium",
    shape: "rounded",
};

export default Button;
