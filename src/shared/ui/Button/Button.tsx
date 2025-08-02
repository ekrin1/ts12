import classnames from "classnames"
import { MouseEventHandler, ReactNode } from "react"
import styles from "./Button.module.scss";

type ButtonProps = {
  title: string
  icon?: ReactNode
  outline?: boolean
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ title, icon, outline, disabled, onClick }: ButtonProps) => {
  return (
   <button
      className={classnames(styles.button, outline && styles.outline)}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {title}
    </button>
  )
}
