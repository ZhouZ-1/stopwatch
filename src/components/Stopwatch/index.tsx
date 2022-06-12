import { useEffect } from "react";
import { useKey } from "react-use";
import { nanoid } from "nanoid";

import { Hour, Minute } from "src/lib/time";
import { useIcon } from "src/hooks/useIcon";
import { Display } from "src/components/Display";
import { Controls } from "src/components/Controls";
import { Notification, useNotification } from "src/components/Notification";

import PlayingIcon from "src/media/playing.svg";
import PausedIcon from "src/media/paused.svg";

import { useStopwatch } from "./state";

import classes from "./style.module.css";

export const Stopwatch = () => {
  const [{ id, started, elapsed, colorScheme }, dispatch] = useStopwatch();

  const notification = useNotification();

  useEffect(() => {
    if (!id) {
      const { pathname, search } = window.location;
      const id = pathname === "/" ? nanoid(5) : pathname.substring(1);

      dispatch({ type: "load", id });

      window.history.replaceState({}, "", "/" + id + search);
    }
  }, [dispatch, id]);

  useIcon({
    href: started ? PlayingIcon : PausedIcon,
  });

  useEffect(() => {
    const { search } = window.location;
    if (!search) {
      document.documentElement.setAttribute("data-color-scheme", colorScheme);
      notification.setMessage(`Color scheme: ${colorScheme}`);
    } else {
      const params = new URLSearchParams(search);
      document.documentElement.style.setProperty("color", params.get("color"));
      document.documentElement.style.setProperty(
        "background-color",
        params.get("background-color")
      );
      notification.setMessage(`Color scheme: custom`);
    }
  }, [colorScheme, notification]);

  useKey("l", () => {
    dispatch({ type: "toggleColorScheme" });
  });

  useKey("ArrowDown", (e) => {
    dispatch({ type: "decrement", amount: e.shiftKey ? Hour : Minute });
  });

  useKey("ArrowUp", (e) => {
    dispatch({ type: "increment", amount: e.shiftKey ? Hour : Minute });
  });

  return (
    <>
      <Notification {...notification} />

      <div className={classes.stopwatch}>
        <Display started={started} elapsed={elapsed} />
        <Controls
          onToggle={() => dispatch({ type: "toggle" })}
          onClear={() => dispatch({ type: "reset" })}
          started={started}
        />
      </div>
    </>
  );
};
