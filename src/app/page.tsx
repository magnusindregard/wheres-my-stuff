// import styles from "./page.module.css";
import { HeaderSimple } from "../../components/header/Header";
import { Grid, GridCol, Container, Title } from "@mantine/core"

export default function Home() {
  return (
    <div>
      <HeaderSimple />
      <Container>
        <Title order={1}>Where&apos;s my stuff?</Title>
      </Container>
      <Container>
        <Grid>
          <GridCol span={4}>1</GridCol>
          <GridCol span={4}>2</GridCol>
          <GridCol span={4}>3</GridCol>
        </Grid>
      </Container>
    </div>
  );
}
