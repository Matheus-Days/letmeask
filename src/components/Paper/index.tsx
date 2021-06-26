import { ReactNode } from "react";
import cx from "classnames";

import "./styles.scss";

type PaperProps = {
  gray?: boolean;
  children?: ReactNode;
};

export function Paper({ gray = false, children }: PaperProps) {
  return <div className={cx("paper", { gray: gray })}>{children}</div>;
}
