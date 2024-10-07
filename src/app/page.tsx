import Image from "next/image";

import {HomePage} from "../../src/components/home/page"
import {Container} from "../../src/components/container/page"

export default function Home() {
  return (
      <>
        <Container>
          <HomePage/>
        </Container>
      </>
  );
}
