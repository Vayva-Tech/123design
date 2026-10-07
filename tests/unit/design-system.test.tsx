import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Tag } from '@/components/ui/Tag';
import { MediaFrame } from '@/components/media/MediaFrame';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Divider } from '@/components/ui/Divider';
import { TextLink } from '@/components/ui/TextLink';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Stack } from '@/components/layout/Stack';
import { Cluster } from '@/components/layout/Cluster';
import { Grid } from '@/components/layout/Grid';

describe('Button', () => {
  it('renders a button element by default', () => {
    const html = renderToStaticMarkup(<Button>Click</Button>);
    expect(html).toContain('<button');
    expect(html).toContain('Click');
  });

  it('renders an anchor for external href', () => {
    const html = renderToStaticMarkup(<Button href="https://example.com">Link</Button>);
    expect(html).toContain('<a');
    expect(html).toContain('href="https://example.com"');
  });

  it('renders a link for internal href', () => {
    const html = renderToStaticMarkup(<Button href="/path">Link</Button>);
    expect(html).toContain('href="/path"');
  });

  it('sets disabled attribute and aria-busy when loading', () => {
    const html = renderToStaticMarkup(<Button loading>Loading</Button>);
    expect(html).toContain('disabled');
    expect(html).toContain('aria-busy="true"');
  });

  it('defaults to type="button"', () => {
    const html = renderToStaticMarkup(<Button>Click</Button>);
    expect(html).toContain('type="button"');
  });

  it('uses CSS class and data attributes instead of inline styles', () => {
    const html = renderToStaticMarkup(
      <Button variant="primary" size="large">
        Click
      </Button>,
    );
    expect(html).toContain('class="btn"');
    expect(html).toContain('data-variant="primary"');
    expect(html).toContain('data-size="large"');
    expect(html).not.toContain('style=');
  });

  it('sets data-disabled for disabled state', () => {
    const html = renderToStaticMarkup(<Button disabled>Click</Button>);
    expect(html).toContain('data-disabled="true"');
  });

  it('sets data-loading for loading state', () => {
    const html = renderToStaticMarkup(<Button loading>Loading</Button>);
    expect(html).toContain('data-loading="true"');
  });
});

describe('Heading', () => {
  it('renders h1 by default for displayXL variant', () => {
    const html = renderToStaticMarkup(<Heading variant="displayXL">Title</Heading>);
    expect(html).toContain('<h1');
    expect(html).toContain('Title');
  });

  it('respects the as prop to override element', () => {
    const html = renderToStaticMarkup(
      <Heading variant="displayXL" as="h2">
        Title
      </Heading>,
    );
    expect(html).toContain('<h2');
  });

  it('applies the correct typography class', () => {
    const html = renderToStaticMarkup(<Heading variant="displayXL">Test</Heading>);
    expect(html).toContain('type-display-xl');
  });

  it('has no inline styles', () => {
    const html = renderToStaticMarkup(<Heading>Title</Heading>);
    expect(html).not.toContain('style=');
  });
});

describe('Text', () => {
  it('renders a p element by default', () => {
    const html = renderToStaticMarkup(<Text>Content</Text>);
    expect(html).toContain('<p');
    expect(html).toContain('Content');
  });

  it('applies the correct variant class', () => {
    const html = renderToStaticMarkup(<Text variant="lead">Lead</Text>);
    expect(html).toContain('type-lead');
  });

  it('supports span element', () => {
    const html = renderToStaticMarkup(<Text as="span">Inline</Text>);
    expect(html).toContain('<span');
  });
});

describe('Tag', () => {
  it('renders a non-interactive span', () => {
    const html = renderToStaticMarkup(<Tag>Label</Tag>);
    expect(html).toContain('<span');
    expect(html).not.toContain('<button');
    expect(html).not.toContain('<a');
    expect(html).toContain('Label');
  });

  it('uses CSS class instead of inline styles', () => {
    const html = renderToStaticMarkup(<Tag>Label</Tag>);
    expect(html).toContain('class="tag"');
    expect(html).not.toContain('style=');
  });
});

describe('Eyebrow', () => {
  it('renders text content', () => {
    const html = renderToStaticMarkup(<Eyebrow>Category</Eyebrow>);
    expect(html).toContain('Category');
  });

  it('renders accent marker with CSS class', () => {
    const html = renderToStaticMarkup(<Eyebrow marker>Category</Eyebrow>);
    expect(html).toContain('eyebrow-marker');
  });

  it('applies eyebrow-text class for styling', () => {
    const html = renderToStaticMarkup(<Eyebrow>Category</Eyebrow>);
    expect(html).toContain('eyebrow-text');
  });

  it('has no inline styles', () => {
    const html = renderToStaticMarkup(<Eyebrow marker>Category</Eyebrow>);
    expect(html).not.toContain('style=');
  });
});

describe('MediaFrame', () => {
  it('renders a figure element', () => {
    const html = renderToStaticMarkup(
      <MediaFrame>
        <div>Media</div>
      </MediaFrame>,
    );
    expect(html).toContain('<figure');
  });

  it('renders caption when provided', () => {
    const html = renderToStaticMarkup(
      <MediaFrame caption="A caption">
        <div>Media</div>
      </MediaFrame>,
    );
    expect(html).toContain('<figcaption');
    expect(html).toContain('A caption');
  });

  it('omits figcaption when no caption', () => {
    const html = renderToStaticMarkup(
      <MediaFrame>
        <div>Media</div>
      </MediaFrame>,
    );
    expect(html).not.toContain('<figcaption');
  });

  it('uses data attributes for variant and aspect', () => {
    const html = renderToStaticMarkup(
      <MediaFrame variant="containedStage" aspect="16:9">
        <div>Media</div>
      </MediaFrame>,
    );
    expect(html).toContain('data-variant="contained-stage"');
    expect(html).toContain('data-aspect="16:9"');
    expect(html).not.toContain('style=');
  });
});

describe('Divider', () => {
  it('renders an hr element', () => {
    const html = renderToStaticMarkup(<Divider />);
    expect(html).toContain('<hr');
  });

  it('uses data-strength attribute', () => {
    const html = renderToStaticMarkup(<Divider strength="strong" />);
    expect(html).toContain('data-strength="strong"');
    expect(html).not.toContain('style=');
  });
});

describe('TextLink', () => {
  it('renders internal links with Next.js Link', () => {
    const html = renderToStaticMarkup(<TextLink href="/test">Link</TextLink>);
    expect(html).toContain('href="/test"');
    expect(html).toContain('class="text-link"');
  });

  it('renders external links with anchor tag', () => {
    const html = renderToStaticMarkup(
      <TextLink href="https://example.com" external>
        Link
      </TextLink>,
    );
    expect(html).toContain('rel="noopener noreferrer"');
    expect(html).toContain('target="_blank"');
  });

  it('renders arrow when requested', () => {
    const html = renderToStaticMarkup(
      <TextLink href="/test" arrow>
        Link
      </TextLink>,
    );
    expect(html).toContain('→');
    expect(html).toContain('text-link-arrow');
  });

  it('has no inline styles', () => {
    const html = renderToStaticMarkup(<TextLink href="/test">Link</TextLink>);
    expect(html).not.toContain('style=');
  });
});

describe('Layout primitives', () => {
  it('Container uses CSS class and data-variant', () => {
    const html = renderToStaticMarkup(<Container variant="reading">Content</Container>);
    expect(html).toContain('class="container"');
    expect(html).toContain('data-variant="reading"');
    expect(html).not.toContain('style=');
  });

  it('Section uses CSS class and data-spacing', () => {
    const html = renderToStaticMarkup(<Section spacing="large">Content</Section>);
    expect(html).toContain('class="section"');
    expect(html).toContain('data-spacing="large"');
    expect(html).not.toContain('style=');
  });

  it('Stack uses CSS class and data attributes', () => {
    const html = renderToStaticMarkup(
      <Stack gap="24" align="center">
        Content
      </Stack>,
    );
    expect(html).toContain('class="stack"');
    expect(html).toContain('data-gap="24"');
    expect(html).toContain('data-align="center"');
    expect(html).not.toContain('style=');
  });

  it('Cluster uses CSS class and data attributes', () => {
    const html = renderToStaticMarkup(
      <Cluster gap="16" justify="between" wrap>
        Content
      </Cluster>,
    );
    expect(html).toContain('class="cluster"');
    expect(html).toContain('data-gap="16"');
    expect(html).toContain('data-justify="between"');
    expect(html).toContain('data-wrap="wrap"');
    expect(html).not.toContain('style=');
  });

  it('Grid uses CSS class and data attributes', () => {
    const html = renderToStaticMarkup(
      <Grid columns={3} gap="16">
        Content
      </Grid>,
    );
    expect(html).toContain('class="grid"');
    expect(html).toContain('data-columns="3"');
    expect(html).toContain('data-gap="16"');
    expect(html).not.toContain('style=');
  });
});

describe('Canonical token values', () => {
  it('accent marker uses eyebrow-marker class', () => {
    const html = renderToStaticMarkup(<Eyebrow marker>Test</Eyebrow>);
    expect(html).toContain('eyebrow-marker');
  });
});

describe('Zero inline styles', () => {
  it('no component renders with style attribute', () => {
    const components = [
      renderToStaticMarkup(<Container>Content</Container>),
      renderToStaticMarkup(<Section>Content</Section>),
      renderToStaticMarkup(<Stack>Content</Stack>),
      renderToStaticMarkup(<Cluster>Content</Cluster>),
      renderToStaticMarkup(<Grid>Content</Grid>),
      renderToStaticMarkup(<Heading>Title</Heading>),
      renderToStaticMarkup(<Text>Body</Text>),
      renderToStaticMarkup(<Eyebrow marker>Label</Eyebrow>),
      renderToStaticMarkup(<Button>Click</Button>),
      renderToStaticMarkup(<Tag>Label</Tag>),
      renderToStaticMarkup(<Divider />),
      renderToStaticMarkup(
        <MediaFrame caption="Test">
          <div />
        </MediaFrame>,
      ),
    ];
    for (const html of components) {
      expect(html).not.toContain('style=');
    }
  });
});
