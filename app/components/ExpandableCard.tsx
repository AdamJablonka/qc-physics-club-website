"use client";
import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  IconButtonProps,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

interface ExpandableCardProps {
  title: string;
  location: string;
  date: Date;
  description: string;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ExpandableCard = ({
  title,
  location,
  date,
  description,
}: ExpandableCardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent
        sx={{ height: "11.5rem", padding: "10px", cursor: "pointer" }}
      >
        <Typography variant="h6">{title}</Typography>
        <Typography color="textSecondary">{location}</Typography>
        <Typography color="textSecondary">{date.toDateString()}</Typography>
        <Typography
          paragraph
          style={{
            opacity: expanded ? 0 : 1,
            position: "relative",
            top: expanded ? "125px" : "0px",
            transition: "top 0.3s ease, opacity 0.3s ease",
          }}
        >
          {description.slice(0, 25)}...
        </Typography>
        <Grid
          container
          sx={{
            alignItems: "center",
          }}
        >
          <Grid item>
            <ExpandMore
              expand={expanded}
              onClick={(e) => {
                e.stopPropagation();
                handleExpandClick();
              }}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Grid>
        </Grid>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ padding: "10px" }}>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
