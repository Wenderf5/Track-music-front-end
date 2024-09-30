import style from './index.module.css';

export function NavBar() {

    return (
        <main className={style.main}>
            <div className={style.logo}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAZRJREFUaEPtWG1ugzAMxQIicYqtJ9l6kq0nmXqSticZu0l3CqR8yJWltKo0DZMAASLzN06M37OfnUCR2QeZxVNIQGtnVBgShhIjICmXGPBgd8JQMGSJNwhDqQDXWn8CwInzZ63dNU1zvdutliEJyFMkDHE5PdV6dinXdd1rVVUfHEDW2ssmRIEL5L/10TVEqcE5d861zyhy9rRODJVl+c7ZKqXOzzajAjLGkMNvzmlRFPu6rtsBdg+TRWpIAgqgSBiaorFml3KkREOyKFTh7ioXc/YolRviMLXNqIB8r/jifhoALiTbvme9MfY/1FsonRGRnRScc8fJJoXQGjLGUM/qbZaIeFZKHTahchJQ6htrlimHiOy9HwAOXhTIlhs4W6ohLwrs2c65/WSiwKnbEuujZHuJH+Z8/glIa30CgN47DiJelVK7TdSQBBRwwVukDwlDa2fIF3rvAImIvzRAhj41+fnspU+pYs9e/ds2J8+zPWPFOp5rX/6NdS7kUp0rDKVCOtaPMBSLXKp9wlAqpGP9ZMfQDatQt0RwoWDYAAAAAElFTkSuQmCC" />
                <span>Track Music</span>
            </div>
        </main>
    )
}