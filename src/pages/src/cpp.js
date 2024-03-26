import "../styles/langpage.css"
import CustomCodeBlock from "../../components/codeblock/CodeBlock";
import {Chapter, HCon, HDec, HDef, HPro, Section, Subsection} from "../../components/section/section";
import {Bold} from "../../components/Bold/Bold";

import codes from "../../codes/cpp"

function CppContent() {
    return (
        <div className="langpage">
            <Section title="Ներածություն">
                C++-ը զարգացման հիմնական լեզուներից մեկն է, որն օգտագործվում է բաց կոդով (open-source)
                նախագծերից շատերի կողմից: Ինչպես յուրաքանչյուր C++ ծրագրավորող գիտի, լեզուն ունի բազմաթիվ
                հզոր առանձնահատկություններ, բայց այդ հզորությունն էլ հանգեցնում է բարդության, ինչն էլ իր
                հերթին կոդը դարձնում է սխալների հակված` դժվար կարդալու ու պահպանելու տեսանկյունից։<br/><br/>

                Այս ուղեցույցի նպատակն է կառավարել այդ բարդությունը՝ մանրամասն նկարագրելով C++֊ով կոդ գրելու
                կարելիները և չկարելիները։ Այս կանոնների նպատակն է պահել կոդերի բազան կառավարելի՝ միաժամանակ
                թույլ տալով ծրագրավորողներին արդյունավետ օգտագործել C++ լեզվի առանձնահատկությունները:<br/><br/>

                Ոճը,այն է, ինչ մենք անվանում ենք մեր C++֊ով կոդը կարգավորող կոնվենցիաներին: Ոճը փոքր ինչ
                սխալ տերմին է, քանի որ այս կոնվենցիաները ներառում են շատ ավելին, քան պարզապես source ֆայլի
                ձևաչափումը (formatting):<br/><br/>

                Google-ի կողմից մշակված բաց կոդով (open-source) նախագծերի մեծ մասը համապատասխանում է
                այս ուղեցույցի պահանջներին:<br/><br/>

                Նկատի ունեցեք, որ այս ուղեցույցը C++֊ի ձեռնարկ չէ. մենք ենթադրում ենք, որ ընթերցողը ծանոթ է լեզվին:<br/><br/>

            </Section>

            <Section title="Վերնագրային (Header) ֆայլեր">
                Ընդհանուր առմամբ, յուրաքանչյուր .cpp(.cc) ֆայլ պետք է ունենա համապատասխան .h ֆայլ:
                Կան որոշ ընդհանուր բացառություններ, ինչպիսիք են unit թեստերը և փոքր .cpp(.cc) ֆայլերը,
                որոնք պարունակում են ընդամենը main() ֆունկցիա:<br/><br/>

                Վերնագրային ֆայլերի ճիշտ օգտագործումը կարող է հսկայական տարբերություն ստեղծել ձեր կոդի
                ընթեռնելիության, չափի և կատարողականի վրա:<br/><br/>

                Հետևյալ կանոնները ձեզ կառաջնորդեն վերնագրային ֆայլերի օգտագործման տարբեր ծուղակների
                միջից դուրս գալու համար:


                <Subsection title="The #define Guard">
                    Բոլոր վերնագրային ֆայլերը պետք է ունենան #define guard-ներ, բազմակի ներառումից
                    խուսափելու համար: Սիմվոլային անվան ձևաչափը պետք է լինի<br/><br/>

                    <Bold>
                        &lt;PROJECT&gt;_&lt;PATH&gt;_&lt;FILE&gt;_H_
                    </Bold><br/><br/>



                    Եզակիությունը երաշխավորելու համար դրանք պետք է հիմնված լինեն նախագծի սկզբնական
                    ծառի ամբողջական ուղու վրա: Օրինակ, <Bold children="foo/src/bar/baz.h"/> ֆայլը <Bold children="project foo"/>-ում պետք է
                    ունենա հետևյալ պաշտպանությունը.<br/><br/>

                    <CustomCodeBlock lang="cpp" code={codes.code1}/>
                </Subsection>

                <Subsection title="Include What You Use">
                    Եթե որևէ source կամ վերնագրային(header) ֆայլը վերաբերում է այլ վայրում սահմանված սիմվոլին, ֆայլը
                    պետք է ուղղակիորեն ներառի վերնագրային(header) ֆայլ, որը պատշաճ կերպով նախատեսում է ապահովել այդ սիմվոլի
                    հայտարարությունը կամ սահմանումը: Այն չպետք է ներառի header ֆայլերը որևէ այլ պատճառով:<br/><br/>

                    Մի՛ ապավինիր անցումային ընդգրկման։ Սա թույլ է տալիս մարդկանց հեռացնել այլևս ոչ անհրաժեշտ #include հայտարարությունները
                    իրենց վերնագրերից՝ առանց client֊ներին կոտրելու: Սա վերաբերում է նաև կապակցված վերնագրերին.
                    <Bold children="foo.cc"/>-ն պետք է ներառի <Bold children="bar.cc"/>, եթե այն օգտագործում է դրանից սիմվոլ, նույնիսկ
                    եթե <Bold children="foo.cc"/>-ն ներառում է bar.h:
                </Subsection>

                <Subsection title="Forward Declarations">
                    Հնարավորության դեպքում խուսափեք forward declaration-ներ (վերահասցեագրեր) օգտագործելուց:
                    Փոխարենը, ներառեք ձեզ անհրաժեշտ վերնագրերը

                    <Chapter>Սահմանում՝</Chapter>

                    “Forward declaration”֊ը սուբյեկտի հայտարարությունն է առանց հարակից սահմանման:
                    <br/><br/>
                    <CustomCodeBlock lang="cpp" code={codes.code2}/>

                    <Chapter>Առավելությունները</Chapter>

                    <ul>
                        <li className="chlp">Forward declaration-ները կարող են փրկել կոմպիլյացիայի ժամանակը, քանի
                            որ <Bold children="#include"/>-ը ստիպում է կոմպիլյատորին բացել ավելի շատ ֆայլեր եւ մշակել ավելի շատ մուտքագրում:</li>
                        <li>Forward declaration-ները կարող են խնայել ավելորդ/անհարկի վերակոմպիլյացիայից: <Bold children="#include"/>-ը կարող է ստիպել,
                            որ ձեր կոդը ավելի հաճախ վերակոմպիլացվի՝, վերնագրի չնչին փոփոխությունների պատճառով:</li>
                    </ul>

                    <Chapter>Թերությունները՝</Chapter>

                    <ul>
                        <li>Forward declaration-ները կարող են թաքցնել կախվածությունը՝ թույլ տալով user կոդin` բաց թողնել
                            անհրաժեշտ վերակոմպիլյացիան, երբ վերնագրերը փոխվեն:
                        </li>
                        <li>Forward declaration-ը, ի տարբերություն #include հայտարարության, դժվարացնում է ավտոմատ
                            գործիքավորման համար սիմվոլը սահմանող մոդուլի հայտնաբերումը:
                        </li>
                        <li>
                            Forward declaration-ը կարող է խախտվել գրադարանի հետագա փոփոխությունների արդյունքում: Ֆունկցիաների
                            և template-ների (ձևանմուշների) forward declaration֊ները կարող են կանխել վերնագրի սեփականատերերին իրենց
                            API-ներում այլ համատեղելի փոփոխություններ կատարելը, օրինակ՝ պարամետրի տեսակը ընդլայնելը, default (լռելյայն)
                            արժեքով template-ի (ձևանմուշի) պարամետր ավելացնելը կամ նոր namespace (անվանատարածք) տեղափոխվելը:
                        </li>
                        <li>
                            Namespace-ից (անվանատարածքից) std:: սիմվոլները forward հայտարարելը  հանգեցնում է չսահմանված վարքագծի(undefined behavior):
                        </li>
                        <li>
                            Կարող է դժվար լինել որոշել, թե արդյոք անհրաժեշտ է forward declaration կամ ամբողջական #include (ներառում):
                            #include-ի փոխարինումը forwrad declaration-ով կարող է փոխել կոդի իմաստը.

                            <CustomCodeBlock lang="cpp" code={codes.code3}/>
                            Եթե #include-ը փոխարինվեր B-ի և D-ի համար, ապա test()-ը կկանչի f(void*):
                        </li>
                        <li>
                            Վերնագրի(header-ի) մի քանի նշանների forward հայտարարումը կարող է ավելի դժվար լինել, քան
                            պարզապես  վերնագրի(header-ի) ներառումը:
                        </li>
                        <li>
                            Կոդի կառուցվածքային ձևավորումը, որը հնարավորություն է տալիս օգտագործել forward declaration-ներ (օրինակ՝ օգտագործելով
                            pointer members (անդամների ցուցիչներ) օբյեկտի անդամների փոխարեն), կարող է կոդը դարձնել ավելի դանդաղ և ավելի բարդ:
                        </li>
                    </ul>

                    <Chapter>Որոշում՝</Chapter>
                    Փորձեք խուսափել մեկ այլ նախագծում սահմանված սուբյեկտների/էությունների forward declaration-ներից:

                </Subsection>

                <Subsection title="Inline Functions">
                    Սահմանեք ֆունկցիաները inline (ներկառուցված) միայն այն դեպքում, երբ դրանք փոքր են, օրինակ, 10 տող կամ ավելի քիչ:


                    <Chapter>Սահմանում՝</Chapter>

                    Դուք կարող եք հայտարարել ֆունկցիաները այնպես, որ կոմպիլյատորին թույլ տա ընդլայնել դրանք inline(ներկառուցված),
                    այլ ոչ թե կանչել դրանք սովորական ֆունկցիայի կանչի մեխանիզմի միջոցով:

                    <Chapter>Առավելությունները</Chapter>

                    Ֆունկցիայի inline դարձնելը կարող է առաջացնել ավելի արդյունավետ օբյեկտային կոդ, քանի դեռ inline(ներկառուցված)
                    ֆունկցիան փոքր է: Ազատորեն մուտքագրեք աքսեսուարներ և մուտատորներ և այլ կարճ, կատարողականի համար կարևոր գործառույթներ:
                    Ազատ եղեք inline դարձնել accessor-ներ և mutator-ներ, և այլ կարճ,
                    կատարողականի համար կարևոր ֆունկցիաներ:

                    <Chapter>Թերությունները՝</Chapter>

                    Inline-ի չափից ավելի օգտագործումը իրականում կարող է դանդաղեցնել ծրագրերը: Կախված ֆունկցիայի չափից՝
                    դրա inline սարքելը կարող է հանգեցնել կոդի չափի մեծացման կամ փոքրացման: Շատ փոքր accessor ֆունկցիայի
                    inline դարձնելը սովորաբար կնվազեցնի կոդի չափը, մինչդեռ շատ մեծ ֆունկցիայի inline դարձնելը կարող է կտրուկ
                    մեծացնել կոդի չափը: Ժամանակակից պրոցեսորների վրա ավելի փոքր կոդը
                    սովորաբար ավելի արագ է աշխատում՝ հրահանգների cache֊ի ավելի լավ օգտագործման շնորհիվ։

                    <Chapter>Որոշում՝</Chapter>


                    Կանոնն այն է, որ պետք չէ ֆունկցիան դարձնել inline, եթե այն ավելի քան 10 տող է: Զգուշացեք destructor-ներից ,
                    որոնք հաճախ ավելի երկար են, քան երևում են member-ի (անդամի) և
                    base-destructor-ի (բազային կործանիչի) implicit (անուղղակի) կանչերի պատճառով:

                    <br/><br/>
                    Մեկ այլ օգտակար կանոն. սովորաբար ծախսարդյունավետ չէ inline դարձնել ֆունկցիաները, որոնք ունեն ցիկլեր (loops)
                    կամ switch statement-ներ (մինչդեռ, ընդհանուր դեպքում, ցիկլի (loop) կամ switch-ի հայտարարությունը երբեք չի կատարվում):
                    <br/><br/>

                    Կարևոր է իմանալ, որ ֆունկցիաները միշտ չէ, որ inline են, նույնիսկ եթե դրանք հայտարարված են որպես այդպիսին.
                    օրինակ, վիրտուալ (virtual) և ռեկուրսիվ(recursive) ֆունկցիաները որպես կանոն inline չեն դառնում: Սովորաբար ռեկուրսիվ
                    ֆունկցիաները չպետք է լինեն inline: Վիրտուալ ֆունկցիան inline դարձնելու հիմնական պատճառն այն է, որ դրա սահմանումը
                    class-ում տեղադրվի՝ հարմարության համար, կամ դրա վարքագիծը (behavior) փաստաթղթավորելու
                    համար, օրինակ՝ accessor-ների և մուտատորների համար:
                </Subsection>

                <Subsection title="Names and Order of Includes">
                    Ներառեք վերնագրերը հետևյալ հաջորդականությամբ՝
                    <ol>
                        <li>առնչվող վերնագրեր</li>
                        <li> C համակարգի(system) վերնագրեր</li>
                        <li>C++ գրադարանի ստանդարտ վերնագրեր</li>
                        <li>այլ գրադարանների վերնագրեր</li>
                        <li> ձեր նախագծի վերնագրեր</li>
                    </ol>

                    Նախագծի վերնագրային բոլոր ֆայլերը պետք է թվարկվեն որպես նախագծի սկզբնաղբյուր directory-ի
                    սերունդներ՝ առանց UNIX directory-ի կեղծանունների օգտագործման՝  (ընթացիկ directory) կամ
                    .. (ծնող(parent) directory): Օրինակ, google-wesome-project/src/base/logging.h-ը պետք է ներառվի որպես.
                    <br/><br/>

                    <CustomCodeBlock lang="cpp" code={codes.code4}/>
                    <br/>
                    Վերնագրերը պետք է ներառվեն միայն անկյունային փակագծերի(angle-bracketed path) միջոցով, եթե
                    գրադարանը պահանջում է դա անել: Մասնավորապես, հետևյալ վերնագրերը պահանջում են անկյունային փակագծեր.

                    <ul>
                        <li>C և C++ ստանդարտ գրադարանի վերնագրեր (օրինակ՝ &lt;stdlib.h&gt; և &lt;string&gt;):</li>
                        <li>POSIX, Linux և Windows համակարգերի վերնագրեր (օրինակ՝ &lt;unistd.h&gt; և &lt;windows.h&gt;):</li>
                        <li>Հազվագյուտ դեպքերում ` երրորդային գրադարաններ (օրինակ՝ &lt;Python.h&gt;):</li>
                    </ul>

                    dir/foo.cc կամ dir/foo_test.cc-ում, որոնց հիմնական նպատակը dir2/foo2.h-ում նյութերի իրականացումը կամ
                    փորձարկումն է, դասավորեք ձեր ընդգրկումները հետևյալ կերպ.

                    <ol>
                        <li>dir2/foo2.h</li>
                        <li>Դատարկ տող</li>
                        <li>C համակարգի վերնագրեր և ցանկացած այլ վերնագիր անկյունային փակագծերում .h ընդլայնմամբ,
                            օրինակ՝ &lt;unistd.h&gt;, &lt;stdlib.h&gt;, &lt;Python.h&gt;:
                        </li>
                        <li>Դատարկ տող</li>
                        <li>C++ ստանդարտ գրադարանի վերնագրեր (առանց ֆայլի ընդլայնման), օրինակ՝ &lt;algorithm&gt;, &lt;cstddef&gt;:</li>
                        <li>Դատարկ տող</li>
                        <li>Այլ գրադարանների .h ֆայլեր:</li>
                        <li>Դատարկ տող</li>
                        <li>Ձեր նախագծի .h ֆայլերը:</li>
                    </ol>

                    Յուրաքանչյուր ոչ դատարկ խումբ առանձնացրեք մեկ դատարկ տողով:
                    <br/><br/>

                    Նախընտրելի դասավորության դեպքում, եթե dir2/foo2.h հարակից վերնագիրը բաց թողնի որևէ անհրաժեշտ ընդգրկում,
                    dir/foo.cc կամ dir/foo_test.cc-ի կառուցումը կխախտվի: Այսպիսով, այս կանոնը երաշխավորում է, որ կառուցման ընդմիջումները
                    առաջին հերթին հայտնվեն այս ֆայլերի վրա աշխատող մարդկանց համար, այլ ոչ թե այլ փաթեթների անմեղ մարդկանց համար:
                    <br/><br/>

                    dir/foo.cc և dir2/foo2.h սովորաբար գտնվում են նույն directory-ում(օրինակ՝ base/basictypes_test.cc և base/basictypes.h),
                    բայց երբեմն կարող են լինել նաև տարբեր directory֊ներում:
                    <br/><br/>

                    Նկատի ունեցեք, որ C վերնագրերը, ինչպիսիք են stddef.h-ը, ըստ էության, փոխարինելի են իրենց C++ երկնմանակների հետ
                    (cstddef): Ցանկացած ոճ ընդունելի է, բայց նախընտրեք համապատասխանությունը գոյություն ունեցող կոդի հետ:


                    <br/><br/>

                    Յուրաքանչյուր հատվածում ընդգրկումները պետք է դասավորվեն այբբենական կարգով: Նկատի ունեցեք, որ ավելի հին կոդը կարող է չհամապատասխանել
                    այս կանոնին և այն պետք է շտկվի, երբ հարմար լինի:
                    <br/><br/>

                    Օրինակ, google-wesome-project/src/foo/internal/fooserver.cc-ում ներառվածները կարող են այսպիսի տեսք ունենալ:

                    <br/><br/>

                    <CustomCodeBlock lang="cpp" code={codes.code5}/>

                    <Chapter>Բացառություն՝</Chapter>

                    Երբեմն, համակարգի հատուկ (system-specific) կոդի համար անհրաժեշտ է պայմանական ներառում: Նման կոդը կարող է դնել պայմանական ներառում
                    այլ ներառումներից հետո: Իհարկե, ձեր համակարգին հատուկ կոդը փոքր և տեղայնացված (localized) պահեք: Օրինակ
                    <br/><br/>

                    <CustomCodeBlock lang="cpp" code={codes.code6}/>

                </Subsection>

            </Section>

            <Section title="Scoping">

                <Subsection title="Namespaces">
                    Մի քանի բացառություններով, տեղադրեք կոդը անվանատարածքում(namespace):
                    Անվանատարածքները պետք է ունենան եզակի/յուրահատուկ անուններ՝ հիմնված նախագծի§
                    անվանման և, հնարավոր է, դրա ուղու վրա: Մի օգտագործեք using-directives (օրինակ՝
                    using namespace foo): Մի օգտագործեք ներկառուցված անվանատարածքներ(inline namespaces):

                    <Chapter>Սահմանում՝</Chapter>

                    Անվանատարածքները ստորաբաժանում են գլոբալ scope֊ը (տիրույթը) տարբեր, անվանված scope֊երի
                    և, հետևաբար, օգտակար են գլոբալ տիրույթում անունների բախումները կանխելու համար:

                    <Chapter>Առավելությունները</Chapter>

                    Անվանատարածքներն ապահովում են խոշոր ծրագրերում անունների կոնֆլիկտները կանխելու
                    մեթոդ՝ միաժամանակ թույլ տալով կոդի մեծամասնությանը օգտագործել խելամիդ կարճ անուններ:

                    <br/><br/>

                    Օրինակ, եթե երկու տարբեր նախագծեր ունեն Foo class գլոբալ տիրույթում, այս սիմվոլները կարող են
                    բախվել կոմպիլյացիայի ժամանակ կամ runtime֊ում (գործարկման ժամանակ): Եթե ​​յուրաքանչյուր
                    նախագիծ իր կոդը տեղադրում է անվանատարածքում, ապա project1::Foo և project2::Foo այժմ տարբեր
                    սիմվոլներ են, որոնք չեն բախվում, և յուրաքանչյուր նախագծի անվանատարածքում կոդը կարող է շարունակել
                    հղվել Foo-ին առանց prefix-ի (նախածանցի):

                    <br/><br/>

                    Inline (ներդրված) անվանատարածքներն ինքնաբերաբար տեղադրում են իրենց անունները պարփակվող
                    տիրույթում(scope֊ում): Դիտարկենք հետևյալ հատվածը, օրինակ.

                    <br/><br/>

                    <CustomCodeBlock lang="cpp" code={codes.code7}/>
                    <br/>
                    outer::inner::foo() և outer::foo() արտահայտությունները փոխարինելի են:
                    Inline namespace-երը հիմնականում նախատեսված են ABI-ի համատեղելիության համար տարբեր տարբերակներում:

                    <Chapter>Թերությունները՝</Chapter>

                    Անվանատարածքները կարող են շփոթեցնող լինել, քանի որ դրանք բարդացնում են պարզելու մեխանիզմը,
                    թե անունը ինչ սահմանվան է վերաբերում:

                    <br/><br/>

                    Ներկառուցված անվանատարածքները, մասնավորապես, կարող են շփոթեցնող լինել, քանի որ անուններն
                    իրականում սահմանափակված չեն այն անվանատարածքով, որտեղ նրանք հայտարարված են: Դրանք
                    օգտակար են միայն որպես որոշ ավելի մեծ տարբերակների policy-ի մաս:

                    <br/><br/>

                    Որոշ համատեքստերում անհրաժեշտ է բազմիցս նշել սիմվոլները իրենց լիովին որակավորված անուններով:
                    Խորը ներկառուցված անվանատարածքների համար սա կարող է խառնաշփոթ ստեղծել:

                    <Chapter>Որոշում՝</Chapter>

                    Անվանատարածքները պետք է օգտագործվեն հետևյալ կերպ.

                    <ul>
                        <li>Հետևեք  Namespace Names կանոններին:</li>
                        <li>Վերջացրեք բազմատող անվանատարածքները մեկնաբանություններով, ինչպես ցույց է տրված
                            օրինակներում:

                            <br/><br/>

                            <CustomCodeBlock lang="cpp" code={codes.code8}/>

                            <br/>

                            Ավելի բարդ .cc ֆայլերը կարող են ունենալ լրացուցիչ մանրամասներ, օրինակ՝ flag-ներ կամ օգտագործման
                            հայտարարություններ(using-declarations):


                            <br/><br/>

                            <CustomCodeBlock lang="cpp" code={codes.code9}/>
                            <br/>
                        </li>
                        <li>
                            Ստեղծված արձանագրության հաղորդագրության կոդը անվանատարածքում տեղադրելու համար օգտագործեք
                            փաթեթի ցուցիչը .proto ֆայլում: Մանրամասների համար տե՛ս Protocol Buffer Packages:
                        </li>
                        <li>
                            Մի հայտարարեք որևէ բան namespace std-ում, ներառյալ ստանդարտ գրադարանային class-ների (դասերի)
                            forward հայտարարությունները: Անվանատարածք std-ում օբյեկտների հայտարարումը չսահմանված
                            վարքագիծ (undefined behavior) է, այսինքն՝ փոխադրելի չէ: Ստանդարտ գրադարանից
                            սուբյեկտներ/էություններ հայտարարելու համար ներառեք համապատասխան վերնագրային (header) ֆայլը:
                        </li>
                        <li>
                            Մի  օգտագործելք using-directive՝ անվանատարածքից բոլոր անունները հասանելի դարձնելու համար:
                        </li>
                        <li>
                            Մի օգտագործեք անվանատարածքային կեղծանունները (Namespace aliases) վերնագրային ֆայլերում, բացառությամբ
                            հստակորեն նշված ներքին անվանատարածքների, քանի որ վերնագրային ֆայլի անվանատարածք ներմուծված
                            ցանկացած բան դառնում է այդ ֆայլի կողմից արտահանվող հանրային (public) API-ի մաս:

                            <br/><br/>
                            <CustomCodeBlock lang="cpp" code={codes.code10}/>
                            <br/>
                        </li>
                        <li>
                            Մի օգտագործեք ներկառուցված(inline) անվանատարածքներ:
                        </li>
                        <li>
                            Անվան մեջ օգտագործեք «ներքին» (internal) անվանատարածքներ API-ի մասերը փաստաթղթավորելու
                            համար, որոնք չպետք է նշվեն API-ի օգտատերերի կողմից:
                        </li>
                        <li>
                            Նոր կոդում նախընտրելի են մեկ տողով տեղադրված անվանատարածքի հայտարարությունները,
                            սակայն պարտադիր չեն:
                        </li>
                    </ul>
                </Subsection>

                <Subsection title="Internal linkage">
                    Երբ .cc ֆայլի սահմանումները կարիք չունեն հղվելու այդ ֆայլից դուրս, նրանց ներքին կապ (internal linkage)
                    տրամադրեք՝ դրանք տեղադրելով անանուն անվանատարածքում կամ հայտարարելով ստատիկ (static): Մի օգտագործեք
                    այս կառուցվածքներից որևէ մեկը .h ֆայլերում:

                    <Chapter>Սահմանում՝</Chapter>

                    Բոլոր հայտարարությունները կարող են տրվել internal linkage (ներքին կապ)՝ տեղադրելով դրանք անանուն
                    անվանատարածքներում: Ֆունկցիաներին և փոփոխականներին կարող է տրվել նաև ներքին կապ՝ դրանք ստատիկ
                    հայտարարելով: Սա նշանակում է, որ այն ամենը, ինչ դուք հայտարարում եք, չի կարող հասանելի լինել այլ ֆայլից:
                    Եթե ​​մեկ այլ ֆայլ հայտարարում է նույն անունով ինչ-որ բան, ապա երկու սուբյեկտները/էութ յունները լիովին
                    անկախ են:

                    <Chapter>Որոշում՝</Chapter>

                    Ներքին կապի օգտագործումը .cc ֆայլերում խրախուսվում է բոլոր կոդերի համար, որոնք այլ տեղ հղում կատարելու
                    կարիք չունեն: Մի օգտագործեք ներքին կապը .h ֆայլերում:<br/><br/>


                    Format (ձևաչափեք) անանուն անվանատարածքները, ինչպես անվանված անվանատարածքները: Ավարտող
                    մեկնաբանության մեջ թողեք անվանատարածքի անունը դատարկ.<br/><br/>

                    <CustomCodeBlock lang="cpp" code={codes.code11}/><br/>

                </Subsection>

                <Subsection title="Nonmember, Static Member, and Global Functions">
                    Նախընտրեք ոչ անդամ (nonmember) ֆունկցիաները անվանատարածքում տեղադրել՝
                    հազվադեպ օգտագործեք ամբողջովին գլոբալ ֆունկցիաները:Մի օգտագործեք դաս (class)
                    պարզապես ստատիկ անդամները խմբավորելու համար։Դասի ստատիկ մեթոդները սովորաբար պետք է
                    սերտորեն կապված լինեն դասի օբյեկտների կամ դասի ստատիկ տվյալների հետ:

                    <HPro/>

                    Ոչ անդամ և ստատիկ անդամ ֆունկցիաները կարող են օգտակար լինել որոշ իրավիճակներում:
                    Ոչ անդամ ֆունկցիաները անվանատարածքում դնելը թույլ չի տալիս աղտոտել գլոբալ անվանատարածքը:

                    <HCon/>

                    Ոչ անդամ և ստատիկ անդամ ֆունկցիաները կարող են ավելի իմաստալից լինել որպես նոր դասի անդամներ,
                    հատկապես, եթե նրանք  հասանելիություն ունեն արտաքին ռեսուրսներին կամ ունեն զգալի կախվածություն:


                    <HDec/>

                    Երբեմն օգտակար է սահմանել ֆունկցիա, որը կապված չէ դասի օբյեկտին: Նման ֆունկցիան կարող է լինել
                    կամ ստատիկ կամ ոչ անդամ: Ոչ անդամ ֆունկցիաները չպետք է կախված լինեն արտաքին փոփոխականներից
                    և գրեթե միշտ պետք է գոյություն ունենան անվանատարածքում: Մի ստեղծեք դասեր միայն ստատիկ
                    անդամները խմբավորելու համար. սա ոչնչով չի տարբերվում, քան պարզապես անուններին ընդհանուր նախածանց
                    (prefix) տալը, և նման խմբավորումը, այնուամենայնիվ, սովորաբար ավելորդ է:<br/><br/>

                    Եթե դուք սահմանում եք ոչ անդամ ֆունկցիա, և այն անհրաժեշտ է միայն իր .cc ֆայլում,
                    օգտագործեք internal linkage՝ դրա տիրույթը սահմանափակելու համար:

                </Subsection>

                <Subsection title="Local Variables">
                    Տեղադրեք ֆունկցիայի փոփոխականները հնարավորինս նեղ տիրույթում և սկզբնարժեքավորեք փոփոխականները
                    հայտարարություններում:<br/><br/>

                    C++-ը թույլ է տալիս փոփոխականներ հայտարարել ֆունկցիայի ցանկացած կետում: Մենք ձեզ խրախուսում
                    ենք դրանք հայտարարել հնարավորինս տեղական (local) և հնարավորինս մոտ առաջին օգտագործմանը:
                    Սա հեշտացնում է ընթերցողին գտնել հայտարարությունը և տեսնել, թե ինչ տիպի է փոփոխականը և ինչ
                    սկզբնարժեքավորում ունի: Մասնավորապես, սկզբնարժեքավորումը պետք է օգտագործվի հայտարարության և
                    assignment֊ի փոխարեն, օրինակ՝

                    <br/><br/>

                    <CustomCodeBlock lang="cpp" code={codes.code12}/><br/>

                    if, while և for ցիկլերի հայտարարությունների համար անհրաժեշտ փոփոխականները սովորաբար պետք է
                    հայտարարվեն այդ հայտարարություններում, որպեսզի այդպիսի փոփոխականները սահմանափակվեն այդ
                    տիրույթում: Օրինակ՝<br/><br/>

                    <CustomCodeBlock lang="cpp" code={codes.code13}/><br/>

                    Կա մեկ նախազգուշացում. եթե փոփոխականը օբյեկտ է, ապա նրա կոնստրուկտորը կանչվում է ամեն անգամ,
                    երբ այն մտնում է scope (տիրույթ) և ստեղծվում, և դրա դեստրուկտորը կանչվում է ամեն անգամ, երբ այն
                    դուրս է գալիս շրջանակից:<br/><br/>

                   <CustomCodeBlock lang="cpp" code={codes.code14}/><br/>

                    Ավելի արդյունավետ կարող է լինել այդպիսի փոփոխականը,որն օգտագործվում է  ցիկլի մեջ, հայտարարել այդ ցիկլից դուրս՝
                    <br/><br/>

                   <CustomCodeBlock lang="cpp" code={codes.code15}/><br/>

                </Subsection>

                <Subsection title="Static and Global Variables">

                    Static storage duration -ով օբյեկտներն արգելված են, եթե դրանք trivially destructible չեն:
                    Ոչ ֆորմալորեն դա նշանակում է, որ destructor֊ը ոչինչ չի անում՝ նույնիսկ հաշվի առնելով (member) և բազայինի
                    (base) destructor֊ները : Ավելի ֆորմալ դա նշանակում է, որ տիպը չունի օգտագործողի կողմից սահմանված
                    (user-defined) կամ virtual destructor, և որ բոլոր բազային և ոչ static անդամները trivially ոչնչացվելի
                    են: Static ֆունկցիա-local փոփոխականները կարող են օգտագործել դինամիկ սկզբնարժեքավորում: Դինամիկ
                    սկզբնարժեքավորումը static class֊ի անդամ փոփոխականների կամ փոփոխականների համար namespace
                    scope֊ում արգելված է, բայց թույլատրվում է սահմանափակ հանգամանքներում. մանրամասների համար տես ստորև:
                    <br/><br/>

                    Որպես կանոն. գլոբալ փոփոխականը բավարարում է այս պահանջներին, եթե նրա հայտարարությունը,
                    որը դիտարկվում է առանձին, կարող է լինել constexpr:

                    <HDef/>

                    Յուրաքանչյուր օբյեկտ ունի storage duration, որը փոխկապակցված է նրա կյանքի տևողության հետ: Static
                    storage duration-ով օբյեկտները ապրում են դրանց սկզբնավորման կետից մինչև ծրագրի ավարտը: Նման
                    օբյեկտները հայտնվում են որպես փոփոխականներ namespace scope-ում(«գլոբալ փոփոխականներ»), որպես
                    class―ների static data անդամներ(member-ներ) կամ որպես function-local փոփոխականներ, որոնք
                    հայտարարված են static ցուցիչով։ Function-local static փոփոխականները սկզբնարժեքավորվում են, երբ
                    control-ը առաջին անգամ անցնում է դրանց հայտարարության միջով։ Static storage duration֊ով մնացած
                    բոլոր օբյեկտները սկզբնարժեքավորվում են որպես ծրագրի մեկնարկի մաս: Static storage duration֊ով  բոլոր
                    օբյեկտները ոչնչացվում են ծրագրի ավարտի ժամանակ (ինչը տեղի է ունենում մինչև unjoined thread-ների
                    դադարեցումը):<br/><br/>

                    Սկզբնարժեքավորումը կարող է դինամիկ (dynamic) լինել, ինչը նշանակում է, որ սկզբնարժեքավորման ժամանակ
                    տեղի է ունենում ոչ trivial ինչ որ բան: (Օրինակ, դիտարկեք constructor, որը հատկացնում է հիշողություն,
                    կամ փոփոխական, որը սկզբնարժեքավորվում է ընթացիկ process֊ի ID-ով): Սկզբնարժեքավորման մյուս
                    տեսակը ստատիկ (static) սկզբնարժեքավորումն է: Այս երկուսը ամբողջովին տարբեր չեն, սակայն. ստատիկ
                    սկզբնարժեքավորումը միշտ տեղի է ունենում static storage duration-ով օբյեկտների համար (օբյեկտի
                    սկզբնարժեքավորումը կա՛մ տվյալ հաստատունով, կա՛մ զրոյական byte֊երի ներկայացմամբ), մինչդեռ դինամիկ
                    սկզբնարժեքավորումը տեղի է ունենում դրանից հետո, եթե հարկավոր է։

                    <HPro/>

                    Գլոբալ և ստատիկ փոփոխականները շատ օգտակար են մեծ թվով հավելվածների համար՝ անվանված հաստատուններ
                    (named constatnts), որոշ թարգմանչական միավորի (translation unit) ներքին օժանդակ տվյալների կառուցվածքներ
                    (auxiliary data structures), հրամանային
                    տողերի flag-ներ, գրանցում, գրանցման մեխանիզմներ, background֊ային ենթակառուցվածք և այլն:

                    <HCon/>

                    Գլոբալ և ստատիկ փոփոխականները, որոնք օգտագործում են դինամիկ սկզբնարժեքավորում կամ ունեն ոչ trivial
                    destructor-ներ, ստեղծում են բարդություն, որը հեշտությամբ կարող է հանգեցնել դժվար գտնվող սխալների:
                    Դինամիկ սկզբնարժեքավորումը չի դասակարգվում translation unit-երի միջև, և ոչ էլ destruction-ը (բացառությամբ,
                    որ destruction-ը տեղի է ունենում սկզբնարժեքավորմանը հակառակ հերթականությամբ): Երբ մեկ սկզբնարժեքավորումը
                    վերաբերում է static storage duration-ով մեկ այլ փոփոխականի, հնարավոր է, որ դա պատճառ դառնա օբյեկտի
                    հասանելի լինելուն մինչև նրա lifetime-ը սկսելը (կամ նրա lifetime-ի ավարտից հետո): Ավելին, երբ ծրագիրը
                    սկսում է thread֊ներ, որոնք միացված չեն ելքի ժամանակ, այդ thread-ները կարող են փորձել հասանելիություն
                    ստանալ օբյեկտների վրա դրանց lifetime-ի ավարտից հետո, եթե դրանց destructor-ը արդեն գործարկվել է:

                    <HDec/>







                </Subsection>



            </Section>
























        </div>
    );
}


export default CppContent;