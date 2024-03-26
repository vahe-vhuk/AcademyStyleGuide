import "../styles/langpage.css"
import CustomCodeBlock from "../../components/codeblock/CodeBlock";

const code1 = "num1 = 1.5\n" +
    "num2 = 6.3\n" +
    "\n" +
    "# Add two numbers\n" +
    "sum = num1 + num2\n" +
    "\n" +
    "# Display the sum\n" +
    "print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))"

function PyContent() {
    return (
         <div className="langpage">
            <h1>Ներածություն</h1>
            <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem hic magnam maiores
                        quaerat sequi sit ullam! Amet dolor eligendi facere facilis inventore ipsum molestiae natus
                        obcaecati sunt tenetur. Laboriosam.
                    Aut, consectetur, esse iusto magni molestias nobis, quaerat quos repellendus sint velit vero
                        voluptatibus! Deleniti error et id modi tempore velit voluptate. Dolor ipsa praesentium
                        provident ratione similique sunt voluptate!
                    Alias amet atque autem dignissimos dolores fuga, hic nihil omnis, pariatur quo, recusandae
                        repellendus soluta suscipit tempora totam? Asperiores doloremque dolorum eos eveniet ex id
                        laborum nulla optio quaerat recusandae?
                    Aut consectetur eligendi enim labore libero maxime minima modi obcaecati, odio, optio, sapiente
                        soluta vitae? Aliquid, consequatur, ex exercitationem ipsam libero porro quis repellendus saepe
                        sint tempore tenetur vel velit.
                    Aliquam at atque blanditiis consequatur cumque eaque harum iste labore minus molestias nam quae
                        repellendus, rerum suscipit tempora totam voluptate voluptatem? Accusamus dolor, eius odit
                        perferendis repellendus sint ut velit.
            </div>

            <CustomCodeBlock lang="python" code={code1}/>

            <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem hic magnam maiores
                        quaerat sequi sit ullam! Amet dolor eligendi facere facilis inventore ipsum molestiae natus
                        obcaecati sunt tenetur. Laboriosam.
                    Aut, consectetur, esse iusto magni molestias nobis, quaerat quos repellendus sint velit vero
                        voluptatibus! Deleniti error et id modi tempore velit voluptate. Dolor ipsa praesentium
                        provident ratione similique sunt voluptate!
                    Alias amet atque autem dignissimos dolores fuga, hic nihil omnis, pariatur quo, recusandae
                        repellendus soluta suscipit tempora totam? Asperiores doloremque dolorum eos eveniet ex id
                        laborum nulla optio quaerat recusandae?
                    Aut consectetur eligendi enim labore libero maxime minima modi obcaecati, odio, optio, sapiente
                        soluta vitae? Aliquid, consequatur, ex exercitationem ipsam libero porro quis repellendus saepe
                        sint tempore tenetur vel velit.
                    Aliquam at atque blanditiis consequatur cumque eaque harum iste labore minus molestias nam quae
                        repellendus, rerum suscipit tempora totam voluptate voluptatem? Accusamus dolor, eius odit
                        perferendis repellendus sint ut velit.
            </div>
        </div>
    );
}


export default PyContent;




