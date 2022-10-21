import { createSignal, Show } from 'solid-js';
import { Title } from 'solid-start';
import Counter from '~/components/Counter';

export default function Home() {
  const [visible, setVisible] = createSignal(true);

  return (
    <main>
      <Title>Other World</Title>
      <Show when={visible()}>
        <div>
          <Title>Title 2</Title>
        </div>
      </Show>
      <h1>Other Hello world!</h1>
      <Counter />
      <p>
        Visit{' '}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{' '}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
