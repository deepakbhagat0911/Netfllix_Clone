import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styled from "@emotion/styled";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";
const Container = styled(Box)`
  display: flex;

  gap: 20px;
  flex-wrap: wrap;
`;
const Cards = styled(Card)`
  width: 250px;
  height: 300px;
`;
const CheckI = styled(CheckIcon)`
  color: red;
`;
const TextBox = styled(Box)``;
const Plans = () => {
  return (
    <>
      <div className="wraper">
        <div className="upper-box">
          <p>Choose the plan that’s right for you</p>
          <div>
            <ul>
              <li>
                <CheckI />
                Watch all you want. Ad-free.
              </li>
              <li>
                <CheckI />
                Recommendations just for you.
              </li>
              <li>
                <CheckI />
                Change or cancel your plan anytime.
              </li>
            </ul>
          </div>
        </div>

        <Container>
          <Cards size="lg" variant="outlined">
            <Chip size="sm" variant="outlined" color="neutral">
              Premium
            </Chip>
            <Typography level="h2">Professional</Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Premium
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Watch on your TV, computer, mobile phone and tablet
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Downloads available
              </ListItem>
            </List>
            <Divider inset="none" />
            <CardActions>
              <Typography level="title-lg" sx={{ mr: "auto" }}>
                ₹649{" "}
                <Typography fontSize="sm" textColor="text.tertiary">
                  / month
                </Typography>
              </Typography>
              <Link to={"/register"} style={{ color: "#333" }}>
                <Button
                  variant="soft"
                  color="neutral"
                  endDecorator={<KeyboardArrowRight />}
                >
                  Start now
                </Button>
              </Link>
            </CardActions>
          </Cards>
          <Cards size="lg" variant="outlined">
            <Chip size="sm" variant="outlined" color="neutral">
              Standard
            </Chip>
            <Typography level="h2">Unlimited</Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Standard
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Watch on your TV, computer, mobile phone and tablet
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Downloads available
              </ListItem>
            </List>
            <Divider inset="none" />
            <CardActions>
              <Typography level="title-lg" sx={{ mr: "auto" }}>
                ₹499{" "}
                <Typography fontSize="sm" textColor="text.tertiary">
                  / month
                </Typography>
              </Typography>
              <Link to={"/register"} style={{ color: "#333" }}>
                <Button
                  variant="soft"
                  color="neutral"
                  endDecorator={<KeyboardArrowRight />}
                >
                  Start now
                </Button>
              </Link>
            </CardActions>
          </Cards>
          <Cards size="lg" variant="outlined">
            <Chip size="sm" variant="outlined" color="neutral">
              Mobile
            </Chip>
            <Typography level="h2">Basic</Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Mobile
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Watch on your TV, computer, mobile phone and tablet
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Downloads available
              </ListItem>
            </List>
            <Divider inset="none" />
            <CardActions>
              <Typography level="title-lg" sx={{ mr: "auto" }}>
                ₹149{" "}
                <Typography fontSize="sm" textColor="text.tertiary">
                  / month
                </Typography>
              </Typography>
              <Link to={"/register"} style={{ color: "#333" }}>
                <Button
                  variant="soft"
                  color="neutral"
                  endDecorator={<KeyboardArrowRight />}
                >
                  Start now
                </Button>
              </Link>
            </CardActions>
          </Cards>
        </Container>
        <TextBox>
          <Typography>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. <br />
            Not all content is available in all resolutions. See our Terms of
            Use for more details.
          </Typography>
          <Typography>
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium,
            <br /> 2 with Standard, and 1 with Basic and Mobile.
          </Typography>
        </TextBox>
      </div>
    </>
  );
};

export default Plans;
