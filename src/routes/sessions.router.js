import { Router } from "express";
import passport from "passport";
import { strategyPassport } from "../utils.js";
import controller from "../controller/sessions.controller.js";

const router = Router();

//register

router.post(
  "/register",
  strategyPassport("register", {
    passReqToCallback: true,
    session: false,
    failureRedirect: "/api/sessions/failregister",
  }),
  async (req, res) => {
    controller.register(req, res);
  }
);

router.get("/failregister", async (req, res) => {
  controller.failregister(req, res);
});

// login

router.post(
  "/login",
  strategyPassport("login", {
    session: false,
    failureRedirect: "/api/sessions/faillogin",
  }),
  async (req, res) => {
    controller.login(req, res);
  }
);

router.get("/faillogin", async (req, res) => {
  controller.faillogin(req, res);
});

// github

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"], session: false }),
  async (req, res) => {}
);

router.get(
  "/",
  passport.authenticate("github", {
    failureRedirect: "/login",
    session: false,
  }),
  async (req, res) => {
    controller.github(req, res);
  }
);

// restore

router.post("/restore", async (req, res) => {
  controller.restore(req, res);
});

router.post("/changePassword", async (req, res) => {
  controller.changePassword(req, res);
});

//current

router.get(
  "/current",
  strategyPassport("jwt", { session: false }),
  (req, res) => {
    controller.current(req, res);
  }
);

export default router;
