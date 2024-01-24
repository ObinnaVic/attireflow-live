import { Col, Collapse, Row, ConfigProvider } from 'antd';
import Button from 'components/Button/Button';

const faqs = [
  {
    id: 0,
    question: 'What is "Attireflow"?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente ad dolores ipsum, numquam qui porro quidem odio error nostrum.',
  },
  {
    id: 1,
    question: 'What types of native attires do you offer?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente ad dolores ipsum, numquam qui porro quidem odio error nostrum.',
  },
  {
    id: 2,
    question: 'Are your products authentic and culturally respectful?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente ad dolores ipsum, numquam qui porro quidem odio error nostrum.',
  },
  {
    id: 3,
    question: 'What sizes are available for your native attires?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente ad dolores ipsum, numquam qui porro quidem odio error nostrum.',
  },
  {
    id: 4,
    question: 'How can i care for and maintain my native attire?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente ad dolores ipsum, numquam qui porro quidem odio error nostrum.',
  },
  {
    id: 5,
    question: 'What is your return and exchange policy?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente ad dolores ipsum, numquam qui porro quidem odio error nostrum.',
  },
  {
    id: 6,
    question:
      'How long does shipping take and do you offer international shipping?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente ad dolores ipsum, numquam qui porro quidem odio error nostrum.',
  },
  {
    id: 7,
    question: 'What payment methods do you accept?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente ad dolores ipsum, numquam qui porro quidem odio error nostrum.',
  },
];

export default function Faqs({ styles }) {
  const panelStyle = {
    marginBottom: 8,
    backgroundColor: '#D6EAFF',
    border: 'none',
    borderRadius: '0.625rem',
  };
  const accordionItems = faqs.map((faq) => {
    return {
      key: faq.id,
      label: faq.question,
      children: <p>{faq.answer}</p>,
      style: panelStyle,
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <section className={styles.faq_wrapper}>
      <h2 className={styles.faq_heading}>frequently asked questions</h2>
      <label
        htmlFor='
      search-faqs'
        className={styles.search}
      >
        <input
          type='search'
          name='search-faqs'
          id='search-faqs'
          placeholder='Search for a question...'
          className={styles.search_input}
        />
        <box-icon
          name='search-alt-2'
          className={styles.search_icon}
          style={{
            position: 'absolute',
            top: '50%',
            right: '0.7rem',
            transform: 'translateY(-50%)',
          }}
          color=' #085cb2'
        ></box-icon>
      </label>

      <Row gutter={10} style={{ marginTop: '3rem' }}>
        <Col sm={24} md={9}>
          <article className={styles.faq_subheading}>
            <h3>you have questions?</h3>
            <p>
              Everything you need to know about the product and how it works.
              Cant find the answer you&#39;re looking for? Please chat with our
              friendly team.
            </p>
          </article>
        </Col>
        <Col sm={24} md={15}>
          <ConfigProvider
            theme={{
              components: {
                Collapse: {
                  colorBgContainer: 'white',
                  colorTextHeading: '#085CB2',
                  fontSizeIcon: '1rem',
                },
              },
            }}
          >
            <Collapse
              accordion
              items={accordionItems}
              expandIconPosition='end'
              className={styles.accordion}
            />
          </ConfigProvider>
        </Col>
      </Row>

      <Button onClick={scrollToTop} className={styles.scroll_to_top}>
        Back to top
        <box-icon name='up-arrow-alt' color='#085CB2'></box-icon>
      </Button>
    </section>
  );
}
