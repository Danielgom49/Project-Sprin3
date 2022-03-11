import React from 'react'
import { LoginBg } from '../styles/StyledComponentsLogin'
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { registerAsync } from '../redux/actions/actionRegister'
import { Link } from 'react-router-dom'


const Register = () => {

    const dispatch = useDispatch()
    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        pass1: '',
        pass2: ''
    })

    const { name, email, pass1, pass2 } = values

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(registerAsync(email, pass1, name))
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center my-10">
                <div>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZkAAAB7CAMAAACRgA3BAAAAw1BMVEX///8iHx//mQAAAAD/lgDU1NT/lADR0dEeGxv/lQDm5uYFAAAYFBT/kQD8/PzCwsKwr68OCAgVERFjYmIbGBiUk5O2trbt7e309PQ+PDzc3NwqJyd4d3fHx8fi4uLw8PCLioqko6MwLi4mIyNIRkaAf39gXl6amZn/1KtUUlJwb2+OjY1APj7/rU//wIH/5s//2rj/sl7/x5D/9u1QTk7/4MT/xYv/oSr/uW//z6L/pz//7dz/+PD/sFj/u3b/nhz/pTnLhNV2AAAS80lEQVR4nO1d6ULyOhAFg6XQFm0tirgBioAruOLyie//VLcLSzNn2oZduZ6fWppJTmbJZJJmMhxK2/vl48uLxnn2/LBzdb2bL7GPKaJUzJ+c5KuVhCdO/SdOp2ylsr07lPIokHJ7LimnRul0+8SXOqFfaqhUFXufrx0KYdimq2d96KZjCHFTrs7WbLXsvS1EtnkS216Iw+tt1fee1BpRKd1AyotWipQHRWUk96q+54oxOuW8qtiA/Stn9JpGLek1p00h7LCzElxbHNXjWT3Jigj0MQMnN8J2R+/QHXG0T3+5ex5pT/da2VXoTtWT0uGlbCRImbkQ6jg/iHtLpXUkDFOXmhXNpDlxIDdcH/+j5fUjq9L7aifyIIVuiFacrEIaJl2EGl7aEy55h+hIyp8/Fzp94ihtAm4/zSZlpi5if4awj2P62mSnriOe4vX9UJZXDHtYzRpUetE45dq8EmaytIbJj9o26bIIJlDRZAbQcSJ2okZ5CaWrxXbRw9lempTiPGaMynbyDyWYl+w76iLuJa7Yi3M5dHhCy7HP9d4VYFYyOwkzcQRdlLmWWWZOuYb9V4yp2YuZw2Ivnph9JSl5tZmfmYObJLVzxM4UzOzG9b5Ofl1TU3XBKTnHTMVgifFmhT70BHtUl8cwYqlpKkrZXAoz+VR1ZdtlmcnH9oTwe6Vqg7nGOWYuYjvhhH2+TmgxzldcKktZWwIz++mt8+rOMFNJ6n00+DhWd44C4weGmSRvmzJnhm9gEK9lfBuLZUaBGE/dOSPIMLOXYJTNi8lPW9NELQLiSWSmlPhCw/vNUYyxC+Fe0DYyyVqGUqI7no+Z5Kk0hnGlwsxJ8rwc27PqNF3OOqCxwMxp8iAY5Vj/N34FxleKQzOSEh3iXMwcKBtStMTITMPlfxxiMi+T5y+2TWNu1JkUsyMy2ZQmmYF1p5QSVHsuZg4Tx1JqGJYWwEyyykxGmPUJpm0IYbNu3K6lMGNepcQwbiflAZ88Oq4c26GU7KDZEOBPxYwjW6UyO5bsZNHNNGZ2Oik020O9Y7psiMvW7s5+65JdWNkpzGRTxz19AtIYgPFcui/lviclm7rQj+ZiRg4himzr5s2hYAbIpuErnbjNNEHcTvA7NPmOMc4+Vbh1Dh01YGYBMEgIWIf545jjR864dY6gWcm8cEwO7MSXeUUdt893gxjjtIWLHGrup564Q4txQSewcRnNCjKOl45aLDMu3+0o9JgH7Gu5jQZ9TkjmhrHcGDjv7LF4YkSQnQWOQaT1ygXVWOqj4oZHd2zeX4TcQtBhk9hrB3WqpsKMK4zO1d5hbKLJb0oYh/6eA/MvU7bzp7QJg4QIuNpARxODQ2SGGKQnOnltSTqIDohR4ZnRRfa4fL3H9j6Im3fJf/QGlfyS8krnBMuMeAqnXaXFJ9B86mqB2h/UHZw57pPUBDVm7g2VElTfYVYWHI5x6hBbBqsK8n/wQqY8uVlm7MZws2SXGR/DT55dEV0UsL8FlkI/lB/gmInkPmG+h3AOx3FtCXM5ZILQ2YHrHVAawm0cuAiWOIpjaq7oGDXhASlk5/ofyQ0y4+P4tpwsZlBlmLDIkR9gmJHMAbtGjOYgMiXcCHOlJsi8RpXBTBQGZxxKjDEhi0Xov0tmJiqVLb2B6b7Zifwf/YXp2+onudOcdUbvK/8fmdFl7sAeejCk9Am1qZR9svlkMylPiMQNfAZxiQG3SVJDoI00AsK1ujwrOK2Utl7BEru+Rh08+Tughu2EYRSuYJmBTWXGkDcZGItBeod6KS+aiheylEzGE9w0LFYZcFkicSY/swfdP6OvqYE5iwrI9F4eH+BeH6rUWfVkt9W8bPid59LY1BURxhlmqOxMTEvawPCHSuFLWT4OpeR2iXAAmYcIuGwYRNtpbjbD2CNJqZneywMI81Kn1rpyymbf0QOmMAOGGFZqJp0B4ESJL0uXchZmmF0kSNiCl3RwiwoYlpLl6Kdp2AiBO3p7FlMzQxc8qO0G3VNt0dgVsk9pmIEZZvdDd2jxDUiGboYZ/OgQ4T/ptjSMsFL0MgMzIDvkViA2hyd0NdkmmJ4ZbvcD/SzoO+eK0clFHkJm6OYRsH+u1uepmYFxBxcHLhwWvFk12SaYnhlm98OowVM4rkwpGgyRXY9/gw7jjqFpen8r1ZN9nBBpzNBxBw8J4Q3lDqVPghcd7F+kxPYAJuXron3HIEEwxYYw6aOuJCVFwPQ+iZmiHwh1zoOiQlgppDJDZxWEzdA7YEbJ0npSXh8/BRWiWKuTwozC4t8Hk81kXgaTPrpih8CtRn+Oa01O4lK+ftUIFw9x24ipzFCNQGZoq9MyoyJl8guYUkuo9cpwY85JhkMbaR3cMDSjwEy15S3pDK5oWGo1jRnq4RbMzHZZScqEN7DVKyaXaYP9NiYzxGrWxG6k5xDSmDlrncds3dJW05ihtmqRzByUdUUp497AtRf8gCt/hYUWmynFMC/ia6HzuHOUyMzBMVtLzfZ5fcwUr9Sl5N8Q4Exl8R8AQj63wzyF+eJIfAqdhyrbRGZqChXD41dPywzGZlQ2iJpZZkrNaaTk3jAEs/i3+f0cqKYwOWawUCDC81zM4ImBxD6viZm8M1WRBTvSAbjFv8s/CnlgvhYdk7oTZzIPM9y+WlKf18NMfUop+aHO8Ht5TO1hAEhpsTqD1jESgM3BDF9NlfUnkunYaNfXw0zsQYA4KfmhzjAbTuziP+bZVTLDlzWbhhDZzlWzVsbV9TqY4c+R+OczzwMpb5RzAE203JAdHwN0ho0AlsMM/tkv7BBXu6O4b/q82RKY4fa43KiUynkzbvMbitPGwP1GLmpeCjNsANmIRpA/gRmmSjIrDqNSqjKjuvgfAmIzlpmlRABYf6iTMzI/gZkbWFvSI42qzHCLf85Axb2W2dJk855zR834RzdLVPsHMINLdrORul3PjOAUi/8hIAfAZsGXsdKEoxy6TeX8AcycUwukZ2kbasywtjvm5GsArFPn3jtddkaJGSYVB1t2U1doLJwZJpULtQBqzDwpL/5jBOPfywzjRKVnYwb0Abd1MnAcZuXMwKgzJ5/Saq8CMGeFUnZPmTFnbN9UuwBqzOAbcS2MO+ErZgar0ZgtLghvGWamWfwPwfh2pnQHNCtaPDMTM1gqxlQTwWJr1cxgZTVT9QOuiGGGOR8prvExCUm+fQzwRtHSp5mYAa7N9LO5q2EmOvaJ/Y6XEh6pMYt/7hS1BLAYuCXJGPzo7thMzEBMyNQ1p9YoLJ0ZcDPM4DBxK32EW/zb9ZOdk3y1GB8347RgKkShDCdqbmdi5hIOnGGfGe8mV2AsnRksecdNLlynUCmYAwdZ/3TV6Ha1q9YOd3UW8MmYUrwSI1r8OxMz4EKYAkTQK+o0l84MBq7IDIT2ECXgE3KLjkfSOXM9nkJwBo5Q0quZmDmnf7FRZ9AGEPqWzkxSUmoI5uwzoY9L3AJ0R4hjsqDDcBxGtkYtnvTITMyAaOhbmXQGWfOsnhn0hnj2mfoD1fKBrCMaEvEwALjkg8IqqX+L0RmMVSAazdKhXz0zuOPL+RCpESWVGTUu3Ii+MaspYs7QmEnzezY/g90hicIWVyAgn/lavZ+BFsCc+JCiGfSWSdBFJP0MDoqqLC5ypcXoYmIz2mrMbUHSrFl9bEZDyJjbgoyIHDB6KYhs2aSd3MLDu7LhWcx6hmzvFWOu9pPO/yydGeacpzQ1Yk5PS9eUckY5CVEBYHNIOsrJVDTJAd5MzNS5w/CTTudjq1Wigc/SmblmqvYPS5G3x0o5GYP0K0XiRcSBsyeOrgqTl/rqmZjhzIBrD0e9mHSHY2S1uXRmOO9tusP+ncbdlBq0M55l8zDDmEKnETZfZC7QpTnSmZjhL+8TznGr3jxMrIeMVJssnRn21kkvgDputTwpk8Z8YnbmYobxtroQl1d7R8wYwVXPs+0CcEf1PTi27aS4zMn7l84MHrYLn/GlTDsQMFo2zsUMdwrKo93hLjzSbdr72ZiZJswn7x8HL8tnRul2UV7KkT+cj5nUSwwjv0u7E1C1DkApZsFjZ56dH5vw5TOjtoBnpHSORqLMyYzyXaPMZeMzMqMyHUUets/ti8nor4CZtBtR/V+IKl5nNVkvwo0EfnXnBAYYbyKiggQ+uFvAZ2SGqTcj0L1Yg+7RSPe+rYCZzE26lFVY10Sv/Y7+3vGY6NR2T6rFSqmUKVWK1Z16rSOE5M6piLHF31HYXOXarMxUUirsXcNPNchTRlbZVTCTdiuvGXwKQq7QliovR8zotrCP99li2eL+sTM5NwUiKtwXLdjvPMzKjGdCk6ixhxV30UuNSH59FcykXNds3IRe7ynyPRd5AEJmTGEmf36oWtaHYThuVqd+JoW9D2eeswDbjOscv2Vsto5GD+k0+lgJM5mTeCn18ZCUzNFDLilx8RP1jrhkvxslI38V3DDJFHjkE1d4JnMxf4DZmckcNOIST8bkJWdDH2ma1BSshpnM6VHMuTjDmYx3cWgAnCOyc9wStmgmfyRrjIOaMNiamgp87GgisHiK+8zTDMxM7nZpMedSdU+66BAfmL6aO4ew1woJRRh3yh1W31HZ+BPgzHWpLvlKUzE49xwNHYfYLcd+IAtRabHHaT3N5XMOrjiKL8GlayGscKOmOjovKy3P+U2WtK4XU8I3wyoNwxFc8NEkHwljdunJE2hUOuQJ9qasStmIXrzuekHWIZXy7MiTMuHjQvPipCMMmRzTEBdJpdEnpGtM4dhe4vhsty5HX7wzn5q7nOZf7/GmtJiPAq7M83AqPcHVEFWlJ2I/JJdvXZoTKfcZPSjVYqRcFA7ql8HtHbZj+7ffi049xUpWpK5xnzIjvefG5+ygeDD3JyKXjdJZ8WDNUp7u7JZrzVq5vsMO9B/+sIH4eG4/fPV7t7e3vf7dQ/f+c90C/cEjpf31almaVsiNUNA0a6vX/mNnnbi/27K03BaDnGb1/7hZEz4ftiyWlSEKW+uWcH7cv92vW4Sp8di3Cgm0+LB+X68I7i3N+ve4bimmw12iuoTQ3tYt5bxoa55dtu7WLcYUeM6l6Utgzh7WLee8KOX8+Vf4PVPszYoSMA7KqBYVXtYt6Nx43Ao6pW111y2JGiyfDj849sLlwfc/bw3j4at36wVqUV36/Trjac132CNt8LxuUVRwa23dfj20nz/AOd6/RDTn9xiBJPzThvHM66/gJgH/xtRov8QEpOBlZLt/PTfaiJnfHzWH6I7dqjX41ZOtN1Iaa1OSAB8TE61ttdctzex4GXWjsG5JFobP77Eh2NIKD791xr0M47Pc7bolWSC+IguFgtX/WLc8M+EutzlB8wTdaNIjZ33/DofT7vci1ncUnGm/PJIheBxE12o5Lffy0xNqj3ealstZ7+M/jAOZNQq1FHxJqQ/PqN3+ZMXpvg9TztZIypK1gW4mxDPZi8pphbuf6XE+fHUZhSwje3Y/DGM2IwMg4/NWVhvf4wzefppVe3x7jTpFayTfQ4H8YaPQxt2PgvX+g7bWP9u38saZNdaQ96Ho3+uTbpn4fKdqE2yt3/4Icj67/8juf24Sh43czCYasxBtrvLBI+d7zWbt0dMWKpp1O5kw3VFq9ifMoeXgs4dq45NTsAYv60oVfjx8Y61Mzoqmkvrhv3P9NYm4EjxvaciMj4Jl9dqrVp3Pbj/HFWVY75IkI5X5mdHkwvAQWwfh2bWtr+6q2Ck9v7zyhWU5Tc69PofM5N5j3rQxeORN2pidwVd32ZPz8/nlW95FjhqyPjlo8BXStylbM0m4f03gJmCn0HtbViHxR/trEMeKP/7fMC3+LyoToBvnbsbsFDzl6b89L9S2fXTv3q2Y0tgQWg7TRkNjtuleZoy3Qgo3Q3q027v2/dz8fDy/9Qc+KYm1fnwRVrifudmBmYwHLZ0bf0hymsfPd/9hFoI+PUru/vmcFFLrLwvWC3eS7TO0vFrsKbdNhCI3IUFBLVjutff10O7efzwmDFTp8eO+2374+veq+WctkvVkwssd79jeAhmtn5wcXwbecurcDBnyKfLr9bx1yOv7ba/X//r6Cqr2+v3ev/fvQcH/nxYcflF/q6ax+uLjNeCtt9Jh+RFoDxTqvONpopjpNVouPiH2ERizwQpH5Ofg+XYObuZHyv53sJjZzOy/Aj7urGmN2qKgWf3kBaSvMv+HNWYs2t9rUBx/8y4l5PJPm1ibVZYxNT7uCklrwMXTomlf6brwnsv9rzVmiOde4gJ9obRYPaU4uGcN/i9r/2SUYGtxObT866ouHP+vvp9BqbtUzSlYWl+Zlj9QPN8NlsGOpyyva9s73Rg8tnvaItkJt+U2dyN/tfho97ZUcpFppBSC7bg/j7FYPHZf3rWZ6ckF98UsbRfuDx/PD72Bet54a5Sa/v76I2UV8PdaemFmP7xGibKRyxXCc+O57/7LAvbb/jAdSo/3z+23h7t+7/b9ezAIWRn4OwL9u4e3LnNufAPxH2qHj637PZKrAAAAAElFTkSuQmCC' alt="logo" width="200" />
                </div>
                <LoginBg>
                    <div>
                        <h1 className="font-bold text-2xl py-3 ml-10">Creat your account</h1>
                    </div>
                    <form onSubmit={handleRegister} className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-start w-full my-2 ml-16">
                            <label className="font-bold float-left">Name</label>
                            <input type="name" name="name" value={name} onChange={handleInputChange} className=" rounded py-2 px-2" />
                        </div>
                        <div className="flex flex-col justify-center items-start w-full my-2 ml-16">
                            <label className="font-bold float-left">Email</label>
                            <input type="email" name="email" value={email} onChange={handleInputChange} className=" rounded py-2 px-2" />
                        </div>
                        <div className="flex flex-col justify-center items-start w-full my-2 ml-16">
                            <label className="font-bold float-left">Password</label>
                            <input type="password" name="pass1" value={pass1} onChange={handleInputChange} className=" rounded py-2 px-2" placeholder="At least 6 characters" />
                        </div>
                        <div className="flex flex-col justify-center items-start w-full my-2 ml-16">
                            <label className="font-bold float-left">Password</label>
                            <input type="password" name="pass2" value={pass2} onChange={handleInputChange} className=" rounded py-2 px-2" />
                        </div>
                        <button>Create your amazon account</button>
                        <div className="flex flex-row">
                            <p className="mx-3">Do you want log in</p>
                            <Link className="text-blue-600 mb-3" to='/login'>Sign in</Link>
                        </div>
                    </form>
                </LoginBg >
            </div >
        </div>
    )
}

export default Register