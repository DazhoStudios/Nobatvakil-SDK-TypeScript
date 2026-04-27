import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { AuthService } from './services/auth';
import { StatesService } from './services/states';
import { SystemService } from './services/system';
import { CategoryService } from './services/category';
import { CountService } from './services/count';
import { SearchService } from './services/search';
import { SeoService } from './services/seo';
import { ConfigService } from './services/config';
import { StatesInfoService } from './services/states-info';
import { SeoPagesService } from './services/seo-pages';
import { CategoryAndSlugService } from './services/category-and-slug';
import { FavoritesService } from './services/favorites';
import { ProfileService } from './services/profile';
import { CartsService } from './services/carts';
import { CommentsService } from './services/comments';
import { PaymentsService } from './services/payments';
import { WalletService } from './services/wallet';
import { SessionsService } from './services/sessions';
import { NotificationsService } from './services/notifications';
import { UserDashBoardOrdersCommentsService } from './services/user-dash-board-orders-comments';
import { OrdersService } from './services/orders';
import { SignaturesService } from './services/signatures';
import { AchievementBadgeService } from './services/achievement-badge';
import { OffersService } from './services/offers';
import { CoinsService } from './services/coins';
import { DashBoardService } from './services/dash-board';
import { UserService } from './services/user';
import { LawyerProfileService } from './services/lawyer-profile';
import { BoostService } from './services/boost';
import { OfficeRoomsService } from './services/office-rooms';
import { LawyerDashboardOrdersService } from './services/lawyer-dashboard-orders';
import { TimesService } from './services/times';
import { ServicesService } from './services/services';
import { CardsService } from './services/cards';
import { WithdrawalRequestsService } from './services/withdrawal-requests';
import { LawyerDashboardWalletService } from './services/lawyer-dashboard-wallet';
import { LawyerDashboardCategoryService } from './services/lawyer-dashboard-category';
import { LawyerDashboardSignaturesService } from './services/lawyer-dashboard-signatures';
import { LawyerDashboardAchievementBadgeService } from './services/lawyer-dashboard-achievement-badge';
import { LeaderboardsService } from './services/leaderboards';
import { LawyerDashboardSettingsNotificationsService } from './services/lawyer-dashboard-settings-notifications';
import { LawyerService } from './services/lawyer';
import { CartService } from './services/cart';
import { ChatsService } from './services/chats';
import { ToolsService } from './services/tools';
import { CallsService } from './services/calls';
import { BlogsService } from './services/blogs';
import { MapsService } from './services/maps';
import { TicketsService } from './services/tickets';
import { FaqService } from './services/faq';

export * from './services/auth';
export * from './services/states';
export * from './services/system';
export * from './services/category';
export * from './services/count';
export * from './services/search';
export * from './services/seo';
export * from './services/config';
export * from './services/states-info';
export * from './services/seo-pages';
export * from './services/category-and-slug';
export * from './services/favorites';
export * from './services/profile';
export * from './services/carts';
export * from './services/comments';
export * from './services/payments';
export * from './services/wallet';
export * from './services/sessions';
export * from './services/notifications';
export * from './services/user-dash-board-orders-comments';
export * from './services/orders';
export * from './services/signatures';
export * from './services/achievement-badge';
export * from './services/offers';
export * from './services/coins';
export * from './services/dash-board';
export * from './services/user';
export * from './services/lawyer-profile';
export * from './services/boost';
export * from './services/office-rooms';
export * from './services/lawyer-dashboard-orders';
export * from './services/times';
export * from './services/services';
export * from './services/cards';
export * from './services/withdrawal-requests';
export * from './services/lawyer-dashboard-wallet';
export * from './services/lawyer-dashboard-category';
export * from './services/lawyer-dashboard-signatures';
export * from './services/lawyer-dashboard-achievement-badge';
export * from './services/leaderboards';
export * from './services/lawyer-dashboard-settings-notifications';
export * from './services/lawyer';
export * from './services/cart';
export * from './services/chats';
export * from './services/tools';
export * from './services/calls';
export * from './services/blogs';
export * from './services/maps';
export * from './services/tickets';
export * from './services/faq';

export * from './http';
export { Environment } from './http/environment';

export class NobatvakilServerSdk {
  public readonly auth: AuthService;

  public readonly states: StatesService;

  public readonly system: SystemService;

  public readonly category: CategoryService;

  public readonly count: CountService;

  public readonly search: SearchService;

  public readonly seo: SeoService;

  public readonly config: ConfigService;

  public readonly statesInfo: StatesInfoService;

  public readonly seoPages: SeoPagesService;

  public readonly categoryAndSlug: CategoryAndSlugService;

  public readonly favorites: FavoritesService;

  public readonly profile: ProfileService;

  public readonly carts: CartsService;

  public readonly comments: CommentsService;

  public readonly payments: PaymentsService;

  public readonly wallet: WalletService;

  public readonly sessions: SessionsService;

  public readonly notifications: NotificationsService;

  public readonly userDashBoardOrdersComments: UserDashBoardOrdersCommentsService;

  public readonly orders: OrdersService;

  public readonly signatures: SignaturesService;

  public readonly achievementBadge: AchievementBadgeService;

  public readonly offers: OffersService;

  public readonly coins: CoinsService;

  public readonly dashBoard: DashBoardService;

  public readonly user: UserService;

  public readonly lawyerProfile: LawyerProfileService;

  public readonly boost: BoostService;

  public readonly officeRooms: OfficeRoomsService;

  public readonly lawyerDashboardOrders: LawyerDashboardOrdersService;

  public readonly times: TimesService;

  public readonly services: ServicesService;

  public readonly cards: CardsService;

  public readonly withdrawalRequests: WithdrawalRequestsService;

  public readonly lawyerDashboardWallet: LawyerDashboardWalletService;

  public readonly lawyerDashboardCategory: LawyerDashboardCategoryService;

  public readonly lawyerDashboardSignatures: LawyerDashboardSignaturesService;

  public readonly lawyerDashboardAchievementBadge: LawyerDashboardAchievementBadgeService;

  public readonly leaderboards: LeaderboardsService;

  public readonly lawyerDashboardSettingsNotifications: LawyerDashboardSettingsNotificationsService;

  public readonly lawyer: LawyerService;

  public readonly cart: CartService;

  public readonly chats: ChatsService;

  public readonly tools: ToolsService;

  public readonly calls: CallsService;

  public readonly blogs: BlogsService;

  public readonly maps: MapsService;

  public readonly tickets: TicketsService;

  public readonly faq: FaqService;

  constructor(public config1: SdkConfig) {
    this.auth = new AuthService(this.config1);

    this.states = new StatesService(this.config1);

    this.system = new SystemService(this.config1);

    this.category = new CategoryService(this.config1);

    this.count = new CountService(this.config1);

    this.search = new SearchService(this.config1);

    this.seo = new SeoService(this.config1);

    this.config = new ConfigService(this.config1);

    this.statesInfo = new StatesInfoService(this.config1);

    this.seoPages = new SeoPagesService(this.config1);

    this.categoryAndSlug = new CategoryAndSlugService(this.config1);

    this.favorites = new FavoritesService(this.config1);

    this.profile = new ProfileService(this.config1);

    this.carts = new CartsService(this.config1);

    this.comments = new CommentsService(this.config1);

    this.payments = new PaymentsService(this.config1);

    this.wallet = new WalletService(this.config1);

    this.sessions = new SessionsService(this.config1);

    this.notifications = new NotificationsService(this.config1);

    this.userDashBoardOrdersComments = new UserDashBoardOrdersCommentsService(this.config1);

    this.orders = new OrdersService(this.config1);

    this.signatures = new SignaturesService(this.config1);

    this.achievementBadge = new AchievementBadgeService(this.config1);

    this.offers = new OffersService(this.config1);

    this.coins = new CoinsService(this.config1);

    this.dashBoard = new DashBoardService(this.config1);

    this.user = new UserService(this.config1);

    this.lawyerProfile = new LawyerProfileService(this.config1);

    this.boost = new BoostService(this.config1);

    this.officeRooms = new OfficeRoomsService(this.config1);

    this.lawyerDashboardOrders = new LawyerDashboardOrdersService(this.config1);

    this.times = new TimesService(this.config1);

    this.services = new ServicesService(this.config1);

    this.cards = new CardsService(this.config1);

    this.withdrawalRequests = new WithdrawalRequestsService(this.config1);

    this.lawyerDashboardWallet = new LawyerDashboardWalletService(this.config1);

    this.lawyerDashboardCategory = new LawyerDashboardCategoryService(this.config1);

    this.lawyerDashboardSignatures = new LawyerDashboardSignaturesService(this.config1);

    this.lawyerDashboardAchievementBadge = new LawyerDashboardAchievementBadgeService(this.config1);

    this.leaderboards = new LeaderboardsService(this.config1);

    this.lawyerDashboardSettingsNotifications = new LawyerDashboardSettingsNotificationsService(
      this.config1,
    );

    this.lawyer = new LawyerService(this.config1);

    this.cart = new CartService(this.config1);

    this.chats = new ChatsService(this.config1);

    this.tools = new ToolsService(this.config1);

    this.calls = new CallsService(this.config1);

    this.blogs = new BlogsService(this.config1);

    this.maps = new MapsService(this.config1);

    this.tickets = new TicketsService(this.config1);

    this.faq = new FaqService(this.config1);
  }

  set baseUrl(baseUrl: string) {
    this.auth.baseUrl = baseUrl;
    this.states.baseUrl = baseUrl;
    this.system.baseUrl = baseUrl;
    this.category.baseUrl = baseUrl;
    this.count.baseUrl = baseUrl;
    this.search.baseUrl = baseUrl;
    this.seo.baseUrl = baseUrl;
    this.config.baseUrl = baseUrl;
    this.statesInfo.baseUrl = baseUrl;
    this.seoPages.baseUrl = baseUrl;
    this.categoryAndSlug.baseUrl = baseUrl;
    this.favorites.baseUrl = baseUrl;
    this.profile.baseUrl = baseUrl;
    this.carts.baseUrl = baseUrl;
    this.comments.baseUrl = baseUrl;
    this.payments.baseUrl = baseUrl;
    this.wallet.baseUrl = baseUrl;
    this.sessions.baseUrl = baseUrl;
    this.notifications.baseUrl = baseUrl;
    this.userDashBoardOrdersComments.baseUrl = baseUrl;
    this.orders.baseUrl = baseUrl;
    this.signatures.baseUrl = baseUrl;
    this.achievementBadge.baseUrl = baseUrl;
    this.offers.baseUrl = baseUrl;
    this.coins.baseUrl = baseUrl;
    this.dashBoard.baseUrl = baseUrl;
    this.user.baseUrl = baseUrl;
    this.lawyerProfile.baseUrl = baseUrl;
    this.boost.baseUrl = baseUrl;
    this.officeRooms.baseUrl = baseUrl;
    this.lawyerDashboardOrders.baseUrl = baseUrl;
    this.times.baseUrl = baseUrl;
    this.services.baseUrl = baseUrl;
    this.cards.baseUrl = baseUrl;
    this.withdrawalRequests.baseUrl = baseUrl;
    this.lawyerDashboardWallet.baseUrl = baseUrl;
    this.lawyerDashboardCategory.baseUrl = baseUrl;
    this.lawyerDashboardSignatures.baseUrl = baseUrl;
    this.lawyerDashboardAchievementBadge.baseUrl = baseUrl;
    this.leaderboards.baseUrl = baseUrl;
    this.lawyerDashboardSettingsNotifications.baseUrl = baseUrl;
    this.lawyer.baseUrl = baseUrl;
    this.cart.baseUrl = baseUrl;
    this.chats.baseUrl = baseUrl;
    this.tools.baseUrl = baseUrl;
    this.calls.baseUrl = baseUrl;
    this.blogs.baseUrl = baseUrl;
    this.maps.baseUrl = baseUrl;
    this.tickets.baseUrl = baseUrl;
    this.faq.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.auth.baseUrl = environment;
    this.states.baseUrl = environment;
    this.system.baseUrl = environment;
    this.category.baseUrl = environment;
    this.count.baseUrl = environment;
    this.search.baseUrl = environment;
    this.seo.baseUrl = environment;
    this.config.baseUrl = environment;
    this.statesInfo.baseUrl = environment;
    this.seoPages.baseUrl = environment;
    this.categoryAndSlug.baseUrl = environment;
    this.favorites.baseUrl = environment;
    this.profile.baseUrl = environment;
    this.carts.baseUrl = environment;
    this.comments.baseUrl = environment;
    this.payments.baseUrl = environment;
    this.wallet.baseUrl = environment;
    this.sessions.baseUrl = environment;
    this.notifications.baseUrl = environment;
    this.userDashBoardOrdersComments.baseUrl = environment;
    this.orders.baseUrl = environment;
    this.signatures.baseUrl = environment;
    this.achievementBadge.baseUrl = environment;
    this.offers.baseUrl = environment;
    this.coins.baseUrl = environment;
    this.dashBoard.baseUrl = environment;
    this.user.baseUrl = environment;
    this.lawyerProfile.baseUrl = environment;
    this.boost.baseUrl = environment;
    this.officeRooms.baseUrl = environment;
    this.lawyerDashboardOrders.baseUrl = environment;
    this.times.baseUrl = environment;
    this.services.baseUrl = environment;
    this.cards.baseUrl = environment;
    this.withdrawalRequests.baseUrl = environment;
    this.lawyerDashboardWallet.baseUrl = environment;
    this.lawyerDashboardCategory.baseUrl = environment;
    this.lawyerDashboardSignatures.baseUrl = environment;
    this.lawyerDashboardAchievementBadge.baseUrl = environment;
    this.leaderboards.baseUrl = environment;
    this.lawyerDashboardSettingsNotifications.baseUrl = environment;
    this.lawyer.baseUrl = environment;
    this.cart.baseUrl = environment;
    this.chats.baseUrl = environment;
    this.tools.baseUrl = environment;
    this.calls.baseUrl = environment;
    this.blogs.baseUrl = environment;
    this.maps.baseUrl = environment;
    this.tickets.baseUrl = environment;
    this.faq.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.auth.timeoutMs = timeoutMs;
    this.states.timeoutMs = timeoutMs;
    this.system.timeoutMs = timeoutMs;
    this.category.timeoutMs = timeoutMs;
    this.count.timeoutMs = timeoutMs;
    this.search.timeoutMs = timeoutMs;
    this.seo.timeoutMs = timeoutMs;
    this.config.timeoutMs = timeoutMs;
    this.statesInfo.timeoutMs = timeoutMs;
    this.seoPages.timeoutMs = timeoutMs;
    this.categoryAndSlug.timeoutMs = timeoutMs;
    this.favorites.timeoutMs = timeoutMs;
    this.profile.timeoutMs = timeoutMs;
    this.carts.timeoutMs = timeoutMs;
    this.comments.timeoutMs = timeoutMs;
    this.payments.timeoutMs = timeoutMs;
    this.wallet.timeoutMs = timeoutMs;
    this.sessions.timeoutMs = timeoutMs;
    this.notifications.timeoutMs = timeoutMs;
    this.userDashBoardOrdersComments.timeoutMs = timeoutMs;
    this.orders.timeoutMs = timeoutMs;
    this.signatures.timeoutMs = timeoutMs;
    this.achievementBadge.timeoutMs = timeoutMs;
    this.offers.timeoutMs = timeoutMs;
    this.coins.timeoutMs = timeoutMs;
    this.dashBoard.timeoutMs = timeoutMs;
    this.user.timeoutMs = timeoutMs;
    this.lawyerProfile.timeoutMs = timeoutMs;
    this.boost.timeoutMs = timeoutMs;
    this.officeRooms.timeoutMs = timeoutMs;
    this.lawyerDashboardOrders.timeoutMs = timeoutMs;
    this.times.timeoutMs = timeoutMs;
    this.services.timeoutMs = timeoutMs;
    this.cards.timeoutMs = timeoutMs;
    this.withdrawalRequests.timeoutMs = timeoutMs;
    this.lawyerDashboardWallet.timeoutMs = timeoutMs;
    this.lawyerDashboardCategory.timeoutMs = timeoutMs;
    this.lawyerDashboardSignatures.timeoutMs = timeoutMs;
    this.lawyerDashboardAchievementBadge.timeoutMs = timeoutMs;
    this.leaderboards.timeoutMs = timeoutMs;
    this.lawyerDashboardSettingsNotifications.timeoutMs = timeoutMs;
    this.lawyer.timeoutMs = timeoutMs;
    this.cart.timeoutMs = timeoutMs;
    this.chats.timeoutMs = timeoutMs;
    this.tools.timeoutMs = timeoutMs;
    this.calls.timeoutMs = timeoutMs;
    this.blogs.timeoutMs = timeoutMs;
    this.maps.timeoutMs = timeoutMs;
    this.tickets.timeoutMs = timeoutMs;
    this.faq.timeoutMs = timeoutMs;
  }

  set token(token: string) {
    this.auth.token = token;
    this.states.token = token;
    this.system.token = token;
    this.category.token = token;
    this.count.token = token;
    this.search.token = token;
    this.seo.token = token;
    this.config.token = token;
    this.statesInfo.token = token;
    this.seoPages.token = token;
    this.categoryAndSlug.token = token;
    this.favorites.token = token;
    this.profile.token = token;
    this.carts.token = token;
    this.comments.token = token;
    this.payments.token = token;
    this.wallet.token = token;
    this.sessions.token = token;
    this.notifications.token = token;
    this.userDashBoardOrdersComments.token = token;
    this.orders.token = token;
    this.signatures.token = token;
    this.achievementBadge.token = token;
    this.offers.token = token;
    this.coins.token = token;
    this.dashBoard.token = token;
    this.user.token = token;
    this.lawyerProfile.token = token;
    this.boost.token = token;
    this.officeRooms.token = token;
    this.lawyerDashboardOrders.token = token;
    this.times.token = token;
    this.services.token = token;
    this.cards.token = token;
    this.withdrawalRequests.token = token;
    this.lawyerDashboardWallet.token = token;
    this.lawyerDashboardCategory.token = token;
    this.lawyerDashboardSignatures.token = token;
    this.lawyerDashboardAchievementBadge.token = token;
    this.leaderboards.token = token;
    this.lawyerDashboardSettingsNotifications.token = token;
    this.lawyer.token = token;
    this.cart.token = token;
    this.chats.token = token;
    this.tools.token = token;
    this.calls.token = token;
    this.blogs.token = token;
    this.maps.token = token;
    this.tickets.token = token;
    this.faq.token = token;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
